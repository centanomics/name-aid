'use strict';
module.exports = (sequelize, DataTypes) => {
  const Collection = sequelize.define(
    'Collection',
    {
      // name: DataTypes.STRING,
      // userId: DataTypes.UUID
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        validate: {
          isUUID: {
            args: 4,
            msg: 'Collection is not found, try again'
          }
        }
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          len: {
            args: [3, 500],
            msg: 'Collection name must be more than 3 characters long'
          }
        }
      },
      userId: {
        type: DataTypes.UUID,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      favorite: {
        type: DataTypes.ENUM('true', 'false'),
        validate: {
          isIn: {
            args: [['true', 'false']],
            msg: 'Collection must be either a favorite(true) or not(false)'
          }
        }
      }
    },
    {}
  );
  Collection.associate = function(models) {
    // associations can be defined here
    Collection.hasMany(models.Term, { foreignKey: 'collectionId' });
    Collection.hasMany(models.Share);
    Collection.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Collection;
};
