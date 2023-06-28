'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('images', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      heroesId: {
        field: 'hero_id',
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'heroes',
          key: 'id'
        }
      },
      imagePath: {
        field: 'image_path',
        type: Sequelize.TEXT
      },
      createdAt: {
        field: 'created_at',
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        field: 'updated_at',
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    await queryInterface.addConstraint('images', {
      fields: ['image_path', 'hero_id'],
      type: 'unique',
      name: 'unique_pair_constraint'
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('images');
  }
};