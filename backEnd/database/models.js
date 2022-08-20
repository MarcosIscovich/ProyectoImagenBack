const cx = require('./conexion');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(cx.database , cx.username, cx.password, {
    host: cx.host,
    dialect: cx.dialect,
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.ClienteModel = require('../models/ClienteModel')(sequelize, Sequelize.DataTypes);
db.ProductoModel = require('../models/ProductoModel')(sequelize, Sequelize.DataTypes);
db.TurnoModel = require('../models/TurnoModel')(sequelize, Sequelize.DataTypes);
db.ProdColocadoModel = require('../models/ProdColocadoModel')(sequelize, Sequelize.DataTypes);
db.TrabajoModel = require('../models/TrabajoModel')(sequelize, Sequelize.DataTypes);
db.UserModel = require('../models/UserModel')(sequelize, Sequelize.DataTypes);

db.ClienteModel.hasMany(db.TurnoModel);
db.TurnoModel.belongsTo(db.ClienteModel);

db.TrabajoModel.hasMany(db.TurnoModel);
db.TurnoModel.belongsTo(db.TrabajoModel);

db.TurnoModel.hasMany(db.ProdColocadoModel);
db.ProdColocadoModel.belongsTo(db.TurnoModel);

db.ProductoModel.hasMany(db.ProdColocadoModel);
db.ProdColocadoModel.belongsTo(db.ProductoModel);

module.exports = db;

