'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('powers_to_heroes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      heroId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'hero_id',
        references: {
          model: 'heroes',
          key: 'id'
        }
      },
      powerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'power_id',
        references: {
          model: 'powers',
          key: 'id'
        }
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
    })
    await queryInterface.addConstraint('powers_to_heroes', {
      fields: ['power_id', 'hero_id'],
      type: 'unique',
      name: 'unique_id_constraint'
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('powers_to_heroes');
  }
};
