'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([queryInterface.addColumn(
      'Users', // model to add column to
      'userName', // column to add
      {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING
      }
    ),queryInterface.addColumn(
      'Users', // model to add column to
      'sex', // column to add
      {
        defaultValue:0,
        allowNull: false,
        type: Sequelize.INTEGER
      }
    )
    ])
  },

  down: (queryInterface, Sequelize) => {

  }
};

