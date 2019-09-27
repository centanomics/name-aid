'use strict';
const bcrypt = require('bcrypt');
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING
      },
      reset_token: {
        type: DataTypes.STRING,
        allowNull: true
      },
      reset_expires: {
        type: DataTypes.DATE,
        allowNull: true
      }
    },
    {
      hooks: {
        afterValidate: function(user) {
          user.password = bcrypt.hashSync(user.password, 10);
        }
      }
    }
  );
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Collection, { foreignKey: 'userId' });
    User.hasMany(models.Share);
  };
  return User;
};
