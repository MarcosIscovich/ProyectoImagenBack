module.exports = function(sequelize, DataTypes) {
    return sequelize.define('cliente_x_prod', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cliente_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        prodcolocado_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        timestamps: true,
        tableName: 'cliente_x_prod'
    });
}