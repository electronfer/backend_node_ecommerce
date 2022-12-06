const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const categoriaController = require('../controllers/categoriaController');


router.get("/", authMiddleware, categoriaController.leerCategoria);

router.post("/", authMiddleware, categoriaController.crearCategoria);

router.put("/", authMiddleware, categoriaController.actualizarCategoria);

router.delete("/", authMiddleware, categoriaController.borrarCategoria);

module.exports = router;