const ClienteRoutes = require('express').Router();
const ClienteController= require('../controllers/ClienteController');
const verifyToken = require('../middlewares/verifyToken');

ClienteRoutes.get('/all', verifyToken , ClienteController.getClientes);

ClienteRoutes.post('/create',  ClienteController.createCliente);
ClienteRoutes.put('/update', ClienteController.uptadeCliente);
ClienteRoutes.delete('/delete', ClienteController.deleteCliente);


module.exports = ClienteRoutes;