module.exports = function(sequelize, DataTypes) {
    return sequelize.define('productos', {
        nombre_producto: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        timestamps: true,
        tableName: 'productos'
    });
}