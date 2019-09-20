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
      collectionId: {
        allowNull: false,
        type: DataTypes.UUID
      },
      userId: {
        allowNull: false,
        type: DataTypes.UUID
      }
    },
    {}
  );
  Share.associate = function(models) {
    // associations can be defined here
    Share.belongsTo(models.Collection);
    Share.belongsTo(models.User);
  };
  return Share;
};
