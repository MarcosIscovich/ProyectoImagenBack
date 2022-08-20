const db = require('../database/models');
const jwt = require('jsonwebtoken');

exports.login = (req, res) => {
    db.UserModel.findOne({
        where: {
            id: req.params.id
        },

    }).then(user => {

        jwt.sign({ user }, 'secretkey', (err, token) => {
            res.json({ token })
        })

    }).catch(error => {
        console.log(error);
        res.status(500).send(error);
    })
};

exports.log = (req, res) => {
        jwt.verify(req.token, 'secretkey', (err, authData) => {
            if (err) {
                res.sendStatus(403);
            } else {
                res.json({
                    message: 'Logeado correctamente',
                    authData: authData,
                });
            }
        }
        );
    }

