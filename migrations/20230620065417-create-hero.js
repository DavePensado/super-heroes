'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('heroes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nickname: {
        type: Sequelize.STRING,
        allowNull: false
      },
      realName: {
        field: 'real_name',
        type: Sequelize.STRING,
        allowNull: false
      },
      originDescription: {
        field: 'origin_description',
        type: Sequelize.TEXT
      },
      catchPhrase: {
        field: 'catch_phrase',
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
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('heroes');
  }
};