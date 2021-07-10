const sequelize = require('../conexion');

let detallepedido = {};

detallepedido.crear = async (producto_id, pedido_id) =>{
    try {
        const result = await sequelize.query('INSERT INTO detallepedido (producto_id, pedido_id) VALUES (?, ?);', {
            replacements: [producto_id, pedido_id]
        });
        return result;

    } catch (error) {
        console.log(error);
    }
};

detallepedido.obtenerTodos = async () =>{
    try {
        const resultado = await sequelize.query('SELECT id, producto_id, pedido_id FROM detallepedido', {type: sequelize.QueryTypes.SELECT});
        return resultado;

    } catch (error) {
         console.log(error);
    }
}

detallepedido.eliminar = async (id) =>{
    try {
        await sequelize.query('DELETE FROM detallepedido WHERE id = ?',
        {
            replacements:[id]
        });

    } catch (error) {
        console.log(error);
    }
}
module.exports = detallepedido;