'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Power extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Power.belongsToMany(models.Hero, {
        through: 'powers_to_heroes',
        foreignKey: 'powerId'
      });
    }
  }
  Power.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Power',
    tableName: 'powers',
    underscored: true
  });
  return Power;
};