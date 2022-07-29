module.exports = function(sequelize, DataTypes) {
    return sequelize.define('cliente', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        direccion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        fecha_nacimiento: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        red_social: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ocupacion: {
            type: DataTypes.STRING,
            allowNull: false,
        },       
    }, {
        timestamps: true,
        tableName: 'cliente'
    });
}