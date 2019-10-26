'use strict';
module.exports = (sequelize, DataTypes) => {
  const Share = sequelize.define(
    'Share',
    {
      // userId: DataTypes.UUID,
      // collectionId: DataTypes.UUID
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
      userId: {
        type: DataTypes.UUID,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      collectionId: {
        type: DataTypes.UUID,
        references: {
          model: 'Collections',
          column: 'id'
        }
      }
    },
    {}
  );
  Share.associate = function(models) {
    // associations can be defined here
    Share.belongsTo(models.Collection, { foreignKey: 'collectionId' });
    Share.belongsTo(models.User), { foreignKey: 'userId' };
  };
  return Share;
};
