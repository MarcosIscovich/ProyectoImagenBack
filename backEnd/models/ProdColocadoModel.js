module.exports = function(sequelize, Datatypes){
    return sequelize.define('prod_colocado', {
        id: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        tintura: {
            type: Datatypes.STRING,
            allowNull: false,
        },
        tipo_nutricion: {
            type: Datatypes.STRING,
            allowNull: false,
        },
        agua_oxigenada: {
            type: Datatypes.STRING,
            allowNull: false,
        },
    },{
        timestamps: true,
        tableName: 'prod_colocado'
    });
}