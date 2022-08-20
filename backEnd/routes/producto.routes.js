const ProductoRoutes = require('express').Router();
const ProductoController = require('../controllers/ProductoController');

ProductoRoutes.get('/all', ProductoController.getProductos);

module.exports = ProductoRoutes;