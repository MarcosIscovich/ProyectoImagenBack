const ClienteRoutes = require('express').Router();
const ClienteController= require('../controllers/ClienteController');

ClienteRoutes.get('/all', ClienteController.getClientes);

module.exports = ClienteRoutes;