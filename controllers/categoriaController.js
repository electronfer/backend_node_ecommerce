const Categoria = require('../models/categoria');

exports.leerCategoria = async (req, res) => {
    res.json({msg:"Leer categoria"})
};

exports.crearCategoria = async (req, res) => {

    try {
        const categoria = new Categoria(req.body);

        categoria.creador = req.usuario.id;

        categoria.save();

        res.json(categoria);
    } catch (error) {
        console.log(error);
    }
};

exports.actualizarCategoria = async (req, res) => {
    res.json({msg:"Actualizar categoria"})
};

exports.borrarCategoria = async (req, res) => {
    res.json({msg:"Borrar categoria"})
};