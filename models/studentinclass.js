'use strict';
module.exports = (sequelize, DataTypes) => {
  const StudentInClass = sequelize.define('StudentInClass', {
    classId: DataTypes.INTEGER,
    studentId: DataTypes.INTEGER
  }, {});
  StudentInClass.associate = function(models) {
    // associations can be defined here
  };
  return StudentInClass;
};