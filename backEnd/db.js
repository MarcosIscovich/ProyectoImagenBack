const Sequelize = require('sequelize');

const sequelize = new Sequelize('imagenbd', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql',
});

const ClienteModel = require('./models/ClienteModel')(sequelize, Sequelize);
const ClienteXProdModel = require('./models/ClienteXProdModel')(sequelize, Sequelize);
const ClienteXTrabModel = require('./models/ClienteXTrabModel')(sequelize, Sequelize);
const ProdColocadoModel = require('./models/ProdColocadoModel')(sequelize, Sequelize);
const TrabajoModel = require('./models/TrabajoModel')(sequelize, Sequelize);
const UserModel = require('./models/UserModel')(sequelize, Sequelize);

sequelize.sync({ force:true}).then(() => {
    console.log('Tabla creada');
}
).catch(error => {
    console.log(error);
});

module.exports = {
    ClienteModel,
    ClienteXProdModel,
    ClienteXTrabModel,
    ProdColocadoModel,
    TrabajoModel,
    UserModel,
}