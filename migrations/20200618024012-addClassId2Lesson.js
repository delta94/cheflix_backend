'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Lessons', // model to add column to
      'parrentClassId', // column to add
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Classes',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Lessons', // model to remove column from
      'parrentClassId' // column to remove 
    );
  }
};
