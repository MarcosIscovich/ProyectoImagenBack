const db = require('../database/models');

exports.getClientes = (req, res) => {

console.log("FUNCIONA GET CLIENTES");
try{
     db.ClienteModel.findAll({
        }
    ).then(clientes => {

        res.status(200).send(clientes);

    }).catch(error => {
        console.log(error);
        res.status(500).send(error);
    }
    );
}catch(error) {
    res.status(500).send(error);
};
   
}