const router = require('express').Router();
const Producto = require('../models/Productos');
const validarAdmin = require('../middlewares/validarAdmin');
const mdlwrProductos = require('../middlewares/productoCorrecto');

router.route('/')
    .get(async(req, res) =>{        //Middleware todos
        const result = await Producto.obtenerTodos();
        res.json(result);
    })

    .post(validarAdmin, mdlwrProductos.crear, mdlwrProductos.existentes, async(req, res) =>{       //Middleware solo admin
        const {nombre, foto, precio} = req.body;
        const result = await Producto.crear(nombre, foto, precio);
        res.json({
            status:200,
            respuesta: "Producto creado"
        });
    })

    .put(validarAdmin, mdlwrProductos.editar, async(req, res)=>{         //Middleware solo admin
        const id = req.query.id;
        const {nombre, foto, precio} = req.body;
        const result = await producto.actualizar(id, nombre, foto, precio);
        res.json({
            status:200,
            respuesta: "Producto actualizado"
        })
    })
    .delete(validarAdmin, async(req, res) =>{     //Middleware solo admin
        const id = req.query.id;
        const result = await Producto.eliminar(id);
        res.json({
            status:200,
            respuesta: "Producto eliminado"
        });
    });


module.exports = router;
