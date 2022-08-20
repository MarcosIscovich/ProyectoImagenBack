const UserRoutes = require('express').Router();
const UserController = require('../controllers/UserController');

UserRoutes.get('/all', UserController.getUsers);

module.exports = UserRoutes;