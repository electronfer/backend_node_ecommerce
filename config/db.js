const mongoose = require('mongoose');
require('dotenv').config({path:"variables.env"});

const conectarDB = async () => {
    try {
        const connection = await mongoose.connect(
            process.env.DB_CONN,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        const url = `${connection.connection.host}:${connection.connection.port}`;
        console.log(`MongoDB conectado en ${url}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
}

module.exports = conectarDB;

