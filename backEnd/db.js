const Sequelize = require('sequelize');

const sequelize = new Sequelize('imagenbd', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql',
});

const ClienteModel = require('./models/ClienteModel')(sequelize, Sequelize);
const ProductoModel = require('./models/ProductoModel')(sequelize, Sequelize);
const TurnoModel = require('./models/TurnoModel')(sequelize, Sequelize);
const ProdColocadoModel = require('./models/ProdColocadoModel')(sequelize, Sequelize);
const TrabajoModel = require('./models/TrabajoModel')(sequelize, Sequelize);
const UserModel = require('./models/UserModel')(sequelize, Sequelize);

ClienteModel.hasMany(TurnoModel);
TurnoModel.belongsTo(ClienteModel);

TrabajoModel.hasMany(TurnoModel);
TurnoModel.belongsTo(TrabajoModel);

TurnoModel.hasMany(ProdColocadoModel);
ProdColocadoModel.belongsTo(TurnoModel);

ProductoModel.hasMany(ProdColocadoModel);
ProdColocadoModel.belongsTo(ProductoModel);



sequelize.sync({ alter: false }).then(() => {
    console.log('Tabla creada');
}
).catch(error => {
    console.log(error);
});

module.exports = {
    ClienteModel,
    ProductoModel,
    TurnoModel,
    ProdColocadoModel,
    TrabajoModel,
    UserModel,
}