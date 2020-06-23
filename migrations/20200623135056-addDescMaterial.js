'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'MaterialInClasses', // model to add column to
      'desc', // column to add
      {
        type: Sequelize.INTEGER
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'MaterialInClasses', // model to remove column from
      'desc' // column to remove 
    );
  }
};