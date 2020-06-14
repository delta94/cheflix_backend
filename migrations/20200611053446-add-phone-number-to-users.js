'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Users', // model to add column to
      'phoneNumber', // column to add
      {
        type: Sequelize.INTEGER
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Users', // model to remove column from
      'phoneNumber' // column to remove 
    );
  }
};
