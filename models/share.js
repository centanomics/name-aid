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
        defaultValue: DataTypes.UUIDV4
      },
      collectionId: {
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      userId: {
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      }
    },
    {}
  );
  Share.associate = function(models) {
    // associations can be defined here
  };
  return Share;
};
