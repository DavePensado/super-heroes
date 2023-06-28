'use strict';
const {
  Model
} = require('sequelize');
const { all } = require('../app');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Image.belongsTo(models.Hero, {
        foreignKey: 'heroId'
      })
    }
  }
  Image.init({
    imagePath:{
      type: DataTypes.TEXT
    }
  }, {
    sequelize,
    modelName: 'Image',
    tableName: 'images',
    underscored: true
  });
  return Image;
};