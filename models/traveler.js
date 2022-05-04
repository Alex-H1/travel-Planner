const { Model , Datatypes} = require('sequelize');
const sequelize = require('../config/connection')

class Traveler extends Model {}

Traveler.init(
    {
        id:{
            primaryKey: true,
            type: Datatypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
        },
        name:{
            type: Datatypes.string,
            allowNull: false,
        },
        email:{
            type: Datatypes.string,
            allowNull: false,
            validate:{
                isEmail: true,
                isAlphanumeric: true,
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'traveler',
    },
);

module.exports = Traveler;