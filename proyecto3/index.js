require('dotenv').config();

const express = require('express');
const app = express();
app.use(express.json());


const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');

app.use(expressJwt({
    secret:process.env.jwtPass, 
    algorithms: ['HS256']
}).unless({
    path: ['/api/login', '/api/registro']
}));


app.listen(process.env.PORT, () =>{
    console.log("Escuchando el puerto " + process.env.PORT);
})


//routes
app.use('/api/login', require('./routes/auth.routes'));
app.use('/api/usuarios', require('./routes/usuarios.routes'));
app.use('/api/productos', require('./routes/productos.routes'));
app.use('/api/pedidos', require('./routes/pedidos.routes'));
