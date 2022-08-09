const TrabajoRoutes = require('express').Router();
const TrabajoController = require('../controllers/TrabajosController');

TrabajoRoutes.get('/all', TrabajoController.getTrabajos);

module.exports = TrabajoRoutes;

