'use strict';
module.exports = (sequelize, DataTypes) => {
  const StudentSeeMaterial = sequelize.define('StudentSeeMaterial', {
    studentId: {
      type: DataTypes.INTEGER
    },
    materialId: {
      type: DataTypes.INTEGER
    }
  }, {});
  StudentSeeMaterial.associate = function(models) {
    // associations can be defined here
  };
  return StudentSeeMaterial;
};