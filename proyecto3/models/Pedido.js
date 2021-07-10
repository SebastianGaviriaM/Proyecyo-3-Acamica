const sequelize = require('../conexion');

let pedido = {};

pedido.crear = async (formaPago, usuario_id) =>{
    try {
        const result = await sequelize.query('INSERT INTO pedido (estado, formaPago, usuario_id) VALUES (?, ?, ?);', {
            replacements: ['NUEVO', formaPago, usuario_id]
        });
        return result;

    } catch (error) {
        console.log(error);
    }
};

pedido.obtenerTodos = async () =>{
    try {
        let resultado = await sequelize.query('SELECT pedido.id, pedido.estado, pedido.formaPago, usuario.nombreUsuario, usuario.direccion FROM pedido JOIN usuario ON usuario.id = pedido.usuario_id', {type: sequelize.QueryTypes.SELECT});
        for (let index = 0; index < resultado.length; index++) {
            let element = resultado[index];
            let prod = await sequelize.query('SELECT productos.* FROM productos JOIN detallepedido ON detallepedido.producto_id = productos.id WHERE detallepedido.pedido_id = ?;', {replacements: [element.id]}, {type: sequelize.QueryTypes.SELECT});
            element.listaProductos = prod[0]
            element.totalAPagar = 0;
        for (let index = 0; index < element.listaProductos.length; index++) {
            const elemento = element.listaProductos[index];
            element.totalAPagar = element.totalAPagar + elemento.precio;
        }
        };
        
        
        return resultado;

    } catch (error) {
        console.log(error);
    }
}

pedido.obtenerPropios = async(nombre) =>{
    try {
        let resultado = await sequelize.query('SELECT pedido.id, pedido.estado, pedido.formaPago, usuario.nombreUsuario, usuario.direccion FROM pedido JOIN usuario ON usuario.id = pedido.usuario_id WHERE nombreUsuario=?', {replacements: [nombre]}, {type: sequelize.QueryTypes.SELECT});
        
        for (let index = 0; index < resultado[0].length; index++) {
            let element = resultado[0][index];
            let prod = await sequelize.query('SELECT productos.* FROM productos JOIN detallepedido ON detallepedido.producto_id = productos.id WHERE detallepedido.pedido_id = ?;', {replacements: [element.id]}, {type: sequelize.QueryTypes.SELECT});
            element.listaProductos = prod[0]
            element.totalAPagar = 0;
        for (let index = 0; index < element.listaProductos.length; index++) {
            const elemento = element.listaProductos[index];
            element.totalAPagar = element.totalAPagar + elemento.precio;
        }
        }; 
        return resultado[0]

    } catch (error) {
        
    }
}

pedido.eliminar = async (id) =>{
    try {
        await sequelize.query('DELETE FROM pedido WHERE id = ?',
        {
            replacements:[id]
        });

    } catch (error) {
        console.log(error);
    }
}

pedido.actualizar = async (id, estado)=>{
    try {
        const resultado = await sequelize.query('UPDATE pedido SET estado = ? WHERE id = ?', {replacements:[estado, id]});
        return resultado;
        
    } catch (error) {
        console.log(error);
    }
}

module.exports = pedido;