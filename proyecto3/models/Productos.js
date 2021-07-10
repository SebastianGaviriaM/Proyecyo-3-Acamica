const sequelize = require('../conexion');

let producto = {};

producto.crear = async (nombre, foto, precio) =>{
    try {
        const result = await sequelize.query('INSERT INTO productos (nombre, foto, precio) VALUES (?, ?, ?);', {
            replacements: [nombre, foto, precio]
        });
        return result;

    } catch (error) {
        console.log(error);
    }
};

producto.obtenerTodos = async () =>{
    try {
        const resultado = await sequelize.query('SELECT id, nombre, foto, precio FROM productos', {type: sequelize.QueryTypes.SELECT});
        return resultado;

    } catch (error) {
        console.log(error);
    }
}

producto.eliminar = async (id) =>{
    try {
        await sequelize.query('DELETE FROM productos WHERE id = ?',
        {
            replacements:[id]
        });

    } catch (error) {
        console.log(error);
    }
}

producto.actualizar = async (id, nombre, foto, precio)=>{
    try {
        const resultado = await sequelize.query('UPDATE productos SET nombre = ?, foto = ?, precio = ? WHERE id = ?', {replacements:[nombre, foto, precio, id]});
        return resultado;
        
    } catch (error) {
        console.log(error);
    }
}
producto.obtenerExistentes = async ()=>{
    try {
        const resultado = await sequelize.query('SELECT nombre FROM productos;', {type: sequelize.QueryTypes.SELECT});
        return resultado;
        
    } catch (error) {
        console.log(error);
    }
}
producto.obtenerId = async ()=>{
    try {
        const resultado = await sequelize.query('SELECT id FROM productos;', {type: sequelize.QueryTypes.SELECT});
        return resultado;
        
    } catch (error) {
        console.log(error);
    }
}



module.exports = producto;

