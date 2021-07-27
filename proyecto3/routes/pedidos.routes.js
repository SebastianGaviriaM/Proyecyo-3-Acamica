const router = require('express').Router();
const Pedido = require('../models/Pedido');
const Detalle = require('../models/Detalle');
const validarAdmin = require('../middlewares/validarAdmin');


router.route('/')
    .get(async(req, res) =>{ 
        if(req.user.usuario.admin){
            let result = await Pedido.obtenerTodos();
            res.json(result);
        } else{
            let result = await Pedido.obtenerPropios(req.user.usuario.nombre);
            res.json(result)
        }
    })

    .post(async(req, res) =>{
        
        const {productos, formaPago} = req.body;
        const result = await Pedido.crear(formaPago, req.user.usuario.id);

        for (let index = 0; index < productos.length; index++) {
            const element = productos[index];
            Detalle.crear(element, result[0]);
        }
        console.log(result);
        res.json({
            status:200,
            respuesta: "Pedido creado"
        });
    })

    .put(validarAdmin, async(req, res)=>{        //Middleware solo admin
        const id = req.quety.id;
        const {estado} = req.body;
        const result = await Pedido.actualizar(id, estado);
        res.json({
            status:200,
            respuesta: "Pedido actualizado"
        })
    })
    .delete(validarAdmin, async(req, res) =>{     //Middleware solo admin
        const id = req.query.id;
        const result = await Pedido.eliminar(id);
        res.json({
            status:200,
            respuesta: "Pedido eliminado"
        });
    });


module.exports = router;