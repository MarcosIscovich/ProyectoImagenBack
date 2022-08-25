const express = require('express');

const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require('./database/models');


//routes
require('./routes/index.routes')(app);

db.sequelize.sync({ alter: false }).then(() => {
    console.log('Tablas creadas correctamente');
}
).catch(error => {
    console.log(error);
});
app.listen(3000, () => {
    console.log('Servidor Funcionando');
});