'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([queryInterface.addColumn(
      'Users', // model to add column to
      'username', // column to add
      {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      }
    ),queryInterface.addColumn(
      'Users', // model to add column to
      'gender', // column to add
      {
        type: Sequelize.BOOLEAN,
      }
    )
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
