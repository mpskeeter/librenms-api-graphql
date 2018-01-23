'use strict';
module.exports = (sequelize, DataTypes) => {
  var devicesPerms = sequelize.define('devicesPerms',
    {
      userId: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: false,
        field: 'user_id'
      },
      deviceId: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: false,
        field: 'device_id'
      },
      accessLevel: {
        type: DataTypes.INTEGER(4),
        allowNull: false,
        defaultValue: '0',
        field: 'access_level'
      }
    },
    {
      // don't add the timestamp attributes (updatedAt, createdAt)
  	  timestamps: false,

  		// don't use camelcase for automatically added attributes but underscore style
  	  // so updatedAt will be updated_at
  	  underscored: true,

  		// define the table's name
      tableName: 'devices_perms'
    }
  );

  devicesPerms.associate = function(models) {
    devicesPerms.belongsTo(models.devices, {foreignKey: 'deviceId', targetKey: 'deviceId'});
    devicesPerms.belongsTo(models.users, {foreignKey: 'userId', targetKey: 'userId'});
  }

  return devicesPerms;
};
