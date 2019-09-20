'use strict';
module.exports = (sequelize, DataTypes) => {
  const Term = sequelize.define(
    'Term',
    {
      // name: DataTypes.STRING,
      // origin: DataTypes.STRING,
      // collectionId: DataTypes.UUID
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING
      },
      origin: {
        allowNull: false,
        type: DataTypes.STRING
      },
      collectionId: {
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      }
    },
    {}
  );
  Term.associate = function(models) {
    // associations can be defined here
  };
  return Term;
};
