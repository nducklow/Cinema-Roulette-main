const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Movie extends Model {}

Movie.init(
{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    movie_id: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false,

    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },

    thumbnail: {
        type: DataTypes.STRING,
        allowNull: true,
        }    
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'movie',
      }    
);

module.exports = Movie; 