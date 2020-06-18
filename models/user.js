'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING
    },
    lastName: {
      type: DataTypes.STRING
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
    },
    gender: {
      type: DataTypes.BOOLEAN
    }
  }, {
    timestamps: true,
    paranoid: true
  });
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Class, {
      foreignKey: 'teacherId',
      as: 'openedClasses'
    });
    User.belongsToMany(models.Class, {
      through: models.StudentInClass,
      as: 'enrolledClasses',
      foreignKey: 'studentId',
      otherKey: 'classId'
    });
  };
  return User;
};