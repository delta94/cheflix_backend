'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userNane: {
      type: DataTypes.STRING
    },
    firstName: {
      type: DataTypes.STRING
    },
    lastName: {
      type: DataTypes.STRING
    },
    sex: {
      type: DataTypes.INTEGER
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
    },
    dateOfBirth: {
      type: DataTypes.DATE
    },
    phoneNumber: {
      type: DataTypes.INTEGER
    }
  }, {
    timestamps: true,
    paranoid: true
  });
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Class, {
      foreignKey: 'teacherId'
    });
  };
  return User;
};