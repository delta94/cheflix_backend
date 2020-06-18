'use strict';
module.exports = (sequelize, DataTypes) => {
  const TestInClass = sequelize.define('TestInClass', {
    classId: DataTypes.INTEGER,
    a: DataTypes.STRING,
    b: DataTypes.STRING,
    c: DataTypes.STRING,
    d: DataTypes.STRING,
    answer: DataTypes.ENUM('a','b','c','d'),
    question: DataTypes.STRING
  }, {});
  TestInClass.associate = function(models) {
    // associations can be defined here
  };
  return TestInClass;
};