const db = require('../database/models');

exports.getUsers = (req, res) => {

    console.log("FUNCIONA GET USERS");

    db.UserModel.findAll({}
    ).then(users => {

        res.status(200).send(users);

    }).catch(error => {
        console.log(error);
        res.status(500).send(error);
    }
    );
}