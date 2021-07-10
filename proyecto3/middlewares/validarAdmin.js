module.exports = (req, res, next) =>{
    if(req.user.usuario.admin){
        next();
    } else{
        res.json("Usuario y/o contraseña erróneas")
    }    
};