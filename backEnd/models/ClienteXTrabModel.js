module.exports = function (sequelize , Datatypes){
    return sequelize.define('cliente_x_trabajos', {
        id: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cliente_id: {
            type: Datatypes.INTEGER,
            allowNull: false,
        },
        trabajo_id: {
            type: Datatypes.INTEGER,
            allowNull: false,
        },
    }, {
        timestamps: true,
        tableName: 'cliente_x_trabajos'
    });
}