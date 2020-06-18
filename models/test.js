'use strict';
module.exports = (sequelize, DataTypes) => {
  const Test = sequelize.define('Test', {
    cauhoi: {
        type: DataTypes.STRING
      },
      A: {
        type: DataTypes.STRING
      },
      B: {
        type: DataTypes.STRING
      },
      
      C: {
        type: DataTypes.STRING,
      },
      D: {
        type: DataTypes.STRING
      },
      dapan: {
        type: DataTypes.STRING
      },
      class_id: {
        type: DataTypes.INTEGER
      }
    }, { 
    timestamps: true,
    paranoid: true
  });
  return Test;
};