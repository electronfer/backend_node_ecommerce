const mongoose = require('mongoose');

const CategoriaSchema = mongoose.Schema({
    nombre: {type: String, required: true, trim: true},
    creador: {type: mongoose.Schema.Types.ObjectId, ref:"Usuario"},
    creado: {type: Date, default:Date.now()},
});

// Definición del modelo
module.exports = mongoose.model("Categoria", CategoriaSchema);