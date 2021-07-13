module.exports = (req, res, next) =>{
    if(req.user.usuario.admin){
        next();
    } else{
        res.json("No eres admin, no puedes ingresar a es informacion")
    }    
};