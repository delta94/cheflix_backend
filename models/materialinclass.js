'use strict';
module.exports = (sequelize, DataTypes) => {
  const MaterialInClass = sequelize.define('MaterialInClass', {
    classId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    link: DataTypes.STRING
  }, {});
  MaterialInClass.associate = function(models) {
    // associations can be defined here

  };
  return MaterialInClass;
};