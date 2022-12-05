const express = require('express');
const conectarDB = require('./config/db');
const usuarioRouters = require('./routers/usuarioRouters');
const authRouters = require('./routers/authRouters');

// Conexión a la base datos
conectarDB();

const app = express();

// Habilitar express.json

app.use(express.json({ extended:true}));

// Rutas API usuarios
app.use("/api/usuarios", usuarioRouters);
app.use("/api/auth", authRouters);

const PORT = 4000
app.listen( PORT, () =>{
    console.log(`Servidor corriendo en el puerto ${PORT}`)
});