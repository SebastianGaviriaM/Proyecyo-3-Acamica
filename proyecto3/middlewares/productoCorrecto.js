let midProducto = {}
const producto = require('../models/Productos');

midProducto.crear =  (req, res, next)=>{
    const Producto = req.body;
    if(!Producto.foto || !Producto.nombre || !Producto.precio){
        res.send('Debes ingresar nombre de Producto, foto y precio para crear un nuevo Producto');
    }else{
        next(); 
    }
};

midProducto.existentes = async(req, res, next)=>{
    const result = await producto.obtenerExistentes();
    let existeproducto = false;
    for (let index = 0; index < result.length; index++) {
        const element = result[index];
        if(element.nombre == req.body.nombre){
            existeproducto = true;
        }
    };
    if(existeproducto){
        res.send('Ya existe un producto con ese nombre. Intenta con uno nuevo').end();
    }else{
        next();
    }
    
    
   
};

midProducto.editar =  (req, res, next)=>{
    const Producto = req.body;
    if(!Producto.foto || !Producto.nombre || !Producto.precio){
        res.send('Debes ingresar nombre de Producto, foto y precio para actualizar un Producto');
    }else{
        next(); 
    }
};

module.exports = midProducto;