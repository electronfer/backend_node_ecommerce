const Categoria = require('../models/categoria');

exports.leerCategoria = async (req, res) => {
    
    try {
        
        const categoria = await Categoria.find({creador: req.usuario.id});

        res.json(categoria);

    } catch (error) {
        console.log(error);
    }
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
    
    try {

        const { id } = req.params;

        const categoria = await Categoria.findById(id);

        if (!categoria) {
            return res.status(400).json({msg: "Categoria no encontrada"});
        }
        
    } catch (error) {
        console.log(error);
    }

};

exports.borrarCategoria = async (req, res) => {
    
    try {
        const categoria = await Categoria.deleteOne({_id: req.params.id});

        res.json({msg: "categoria eliminada"});

        //console.log(categoria);

    } catch (error) {
        console.log(error);
    }

};