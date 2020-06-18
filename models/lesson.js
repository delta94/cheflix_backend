'use strict';
module.exports = (sequelize, DataTypes) => {
  const Lesson = sequelize.define('Lesson', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    vid: DataTypes.STRING,
    parrentClassId: DataTypes.INTEGER,
  }, {});
  Lesson.associate = function(models) {
    // associations can be defined here
    Lesson.belongsTo(models.Class, {
      foreignKey: 'parrentClassId'
    });
  };
  return Lesson;
};