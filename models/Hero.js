'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Hero.belongsToMany(models.Power, {
        through: 'powers_to_heroes',
        foreignKey: 'heroId'
      });

      Hero.hasMany(models.Image, {
        foreignKey: 'heroId'
      });
    }
  }
  Hero.init({
    nickname: {
      type: DataTypes.STRING,
      allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true
        }
    },
    realName: {
      type: DataTypes.STRING,
      allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true
        }
    },
    originDescription: {
      type: DataTypes.TEXT
    },
    catchPhrase: {type: 
      DataTypes.TEXT
    }
  }, {
    sequelize,
    modelName: 'Hero',
    tableName: 'heroes',
    underscored: true
  });
  return Hero;
};