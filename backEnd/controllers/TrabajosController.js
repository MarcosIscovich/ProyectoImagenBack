const db = require('../database/models');

exports.getTrabajos = (req, res) => {

    console.log("FUNCIONANDO GET TRABAJOS");

    db.TrabajoModel.findAll({
    }).then(trabajos => {
        res.status(200).send(trabajos);
    }
    ).catch(error => {

        res.status(500).send(error);
    }
    );
}