const Usuario = require('../models/Usuarios');
let midUsuario = {}

midUsuario.crear =  (req, res, next)=>{
    const usuario = req.body;
    if(!usuario.nombreUsuario || !usuario.contrasena || !usuario.email){
        res.send('Debes ingresar nombre de usuario, contrasena y email para crear un nuevo usuario');
    }else{
        next(); 
    }
};

midUsuario.nombres = async(req, res, next)=>{
    const result = await Usuario.obtenerNombres();
    let existeUsuario = false;
    for (let index = 0; index < result.length; index++) {
        const element = result[index];
        if(element.nombreUsuario == req.body.nombreUsuario){
            existeUsuario = true;
        }
    };
    if(existeUsuario){
        res.send('Ya existe un usuario con ese nombre. Intenta con uno nuevo').end();
    }else{
        next();
    }   
};

midUsuario.email = async(req, res, next)=>{
    const result = await Usuario.obtenerEmail();
    let existeEmail = false;
    for (let index = 0; index < result.length; index++) {
        const element = result[index];
        if(element.email == req.body.email){
            existeEmail = true;
        }
    }
    if(existeEmail){
        res.send('Ya existe un usuario con ese correo. Intenta con uno nuevo');
    }else{
        next();
    }
}



module.exports = midUsuario;