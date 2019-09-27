'use strict';
module.exports = (sequelize, DataTypes) => {
  const Term = sequelize.define(
    'Term',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        validate: {
          isUUID: {
            args: 4,
            msg: 'Term is not found, try again'
          }
        }
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          len: {
            args: [3, 500],
            msg: 'Term must be longer than 3 characters'
          }
        }
      },
      origin: {
        allowNull: false,
        type: DataTypes.STRING
      },
      collectionId: {
        allowNull: false,
        type: DataTypes.UUID
      }
    },
    {}
  );
  Term.associate = function(models) {
    // associations can be defined here
    Term.belongsTo(models.Collection, { foreignKey: 'collectionId' });
  };
  return Term;
};
