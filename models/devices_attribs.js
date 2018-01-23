'use strict';
module.exports = (sequelize, DataTypes) => {
  var devicesAttribs = sequelize.define('devicesAttribs',
    {
      attribId: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'attrib_id'
      },
      deviceId: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: false,
        field: 'device_id'
      },
      attribType: {
        type: DataTypes.STRING(32),
        allowNull: false,
        field: 'attrib_type'
      },
      attribValue: {
        type: DataTypes.TEXT,
        allowNull: false,
        field: 'attrib_value'
      }
    },
    {
      // don't add the timestamp attributes (updatedAt, createdAt)
      timestamps: true,

      // don't use camelcase for automatically added attributes but underscore style
      // so updatedAt will be updated_at
      underscored: true,

      // I don't want createdAt
      createdAt: false,

      // I want updatedAt to actually be called updated
      updatedAt: 'updated',

      // define the table's name
      tableName: 'devices_attribs'
    }
  );

  devicesAttribs.associate = function(models) {
    devicesAttribs.belongsTo(models.devices, {foreignKey: 'deviceId', targetKey: 'deviceId'});
  }

  return devicesAttribs;
};
