'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Test', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cauhoi: {
        type: Sequelize.STRING
      },
      A: {
        type: Sequelize.STRING
      },
      B: {
        type: Sequelize.STRING
      },
      C: {
        type: Sequelize.STRING,
      },
      D: {
        type: Sequelize.STRING
      },
      dapan: {
        type: Sequelize.STRING
      },
      class_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Test');
  }
};