const db = require('../database/models');
const bcrypt = require('bcrypt');

exports.getClientes = (req, res) => {

    console.log("FUNCIONA GET CLIENTES");
    try {
        db.ClienteModel.findAll({
        }
        ).then(clientes => {

            res.status(200).send(clientes);

        }).catch(error => {
            console.log(error);
            res.status(500).send(error);
        }
        );
    } catch (error) {
        res.status(500).send(error);
    };

}

exports.createCliente = async (req, res) => {
    try {
        const { nombre, password, telefono, direccion, email, fecha_nacimiento, red_social
            , ocupacion, tipo_cabello, estado_cabello, } = req.body;

        const passcrypt = await bcrypt.hash(password, 10);

        db.ClienteModel.create({
            nombre,
            password: passcrypt,
            telefono,
            direccion,
            email,
            fecha_nacimiento,
            red_social,
            ocupacion,
            tipo_cabello,
            estado_cabello,

        }).then(cliente => {

            console.log("cliente CREADO");
            res.status(200).send(cliente);
        }).catch(error => {
            console.log(error);
            res.status(500).send(error);
        })
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.uptadeCliente = (req, res) => {
    try {
        const { nombre, password, telefono, direccion, email, fecha_nacimiento, red_social
            , ocupacion, tipo_cabello, estado_cabello, } = req.body;
        db.ClienteModel.update({
            nombre,
            password,
            telefono,
            direccion,
            email,
            fecha_nacimiento,
            red_social,
            ocupacion,
            tipo_cabello,
            estado_cabello,
        },
            {
                where: {
                    id: req.body.id
                }
            }).then(cliente => {
                res.status(200).send(cliente);
            }).catch(error => {
                console.log(error);
                res.status(500).send(error);
            }
            );

    } catch (error) {
        res.status(500).send(error);
    }
}

exports.deleteCliente = (req, res) => {
    try {
        db.ClienteModel.destroy({
            where: {
                id: req.body.id
            }
        }).then(cliente => {
            res.sendStatus(200 , cliente);
        }).catch(error => {
            console.log(error);
            res.status(500).send(error);
        }
        );
    } catch (error) {
        res.status(500).send(error);
    }
}