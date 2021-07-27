const sequelize = require('../conexion');

let Usuario = {};

Usuario.obtenerTodos = async() =>{
    try {
        const resultado = await sequelize.query('SELECT id, nombreUsuario, nombreYApellido, email, telefono, direccion FROM usuario', {type: sequelize.QueryTypes.SELECT});
        return resultado;
        
    } catch (error) {
        console.log(error);
    }
    
};

Usuario.crear = async(nombreUsuario, nombreYApellido, email, telefono, direccion, passwordhash, esAdmin) => {
    try {
        const result = await sequelize.query('INSERT INTO usuario (nombreUsuario, nombreYApellido, email, telefono, direccion, contrasena, esAdmin) VALUES (?, ?, ?, ?, ?, ?, ?);', {
            replacements: [nombreUsuario, nombreYApellido, email, telefono, direccion, passwordhash, esAdmin]
        });
        return result;
        
    } catch (error) {
        console.log(error);
        
    }  
};
Usuario.actualizar = async (id, nombreUsuario, nombreYApellido, email, telefono, direccion) =>{
    try {
        const resultado = await sequelize.query('UPDATE usuario SET nombreUsuario = ?, nombreYApellido = ?, email = ?, telefono = ?, direccion = ? WHERE id = ?', {replacements:[nombreUsuario, nombreYApellido, email, telefono, direccion, id]});
        return resultado;
        
    } catch (error) {
        console.log(error);
    }
};
Usuario.borrar =  async (id) => {
    try {
        await sequelize.query('DELETE FROM usuarios WHERE id = ?',
        {
            replacements:[id]
        });
        
    } catch (error) {
        console.log(error);
    }
};
Usuario.obtenerNombres = async ()=>{
    try {
        const resultado = await sequelize.query('SELECT nombreUsuario FROM usuario;', {type: sequelize.QueryTypes.SELECT});
        return resultado;
        
    } catch (error) {
        console.log(error);
    }
}

Usuario.obtenerEmail = async ()=>{
    try {
        const resultado = await sequelize.query('SELECT email FROM usuario;', {type: sequelize.QueryTypes.SELECT});
        return resultado;
        
    } catch (error) {
        console.log(error);
    }
}

Usuario.obtenerID = async ()=>{
    try {
        const resultado = await sequelize.query('SELECT id FROM usuario;', {type: sequelize.QueryTypes.SELECT});
        return resultado;
        
    } catch (error) {
        console.log(error);
    }
}



module.exports = Usuario;