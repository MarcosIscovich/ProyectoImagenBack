const db = require ('../database/models');

exports.getProductos = (req, res) => {
    console.log("FUNCIONA GET PRODUCTOS");
    db.ProductoModel.findAll({
            
        }).then(productos => {
            res.status(200).send(productos);
        }).catch(error => {
            console.log(error);
            res.status(500).send(error);
        }
        );
    }