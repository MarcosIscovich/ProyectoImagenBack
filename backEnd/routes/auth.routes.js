const AuthRoutes = require('express').Router();
const AuthController = require('../controllers/AuthController');
const verifyToken = require('../middlewares/verifyToken');

AuthRoutes.post('/:id', AuthController.login);

AuthRoutes.post('/api' , verifyToken , AuthController.log);



module.exports = AuthRoutes;