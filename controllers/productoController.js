const Producto = require('../models/producto');

exports.leerProducto = async (req, res) => {
    res.json({msg:"Leer producto"})
};

exports.crearProducto = async (req, res) => {
    res.json({msg:"Crear producto"})
};

exports.actualizarProducto = async (req, res) => {
    res.json({msg:"Actualizar producto"})
};

exports.borrarProducto = async (req, res) => {
    res.json({msg:"Borrar producto"})
};