'use strict';
module.exports = (sequelize, DataTypes, models) => {
  let deviceRelationships = sequelize.define('deviceRelationships',
    {
      parentDeviceId: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: false,
        defaultValue: 0,
        primaryKey: true,
        // references: {
        //   model: 'devices',
        //   key: 'device_id',
        //   // Defer all foreign key constraint check to the end of a transaction
        //   deferrable: sequelize.Deferrable.INITIALLY_DEFERRED,
        // },
        field: 'parent_device_id'
      },
      childDeviceId: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: false,
        defaultValue: 0,
        primaryKey: true,
        // references: {
        //   model: 'devices',
        //   key: 'device_id',
        //   // Defer all foreign key constraint check to the end of a transaction
        //   deferrable: sequelize.Deferrable.INITIALLY_DEFERRED,
        // },
        field: 'child_device_id'
      }
    },
    {
      // don't add the timestamp attributes (updatedAt, createdAt)
  	  timestamps: false,

  		// don't use camelcase for automatically added attributes but underscore style
  	  // so updatedAt will be updated_at
  	  underscored: true,

  		// define the table's name
  		tableName: 'device_relationships'
    }
  );

  deviceRelationships.associate = function(models) {
    deviceRelationships.belongsTo(models.devices, {foreignKey: 'parentDeviceId', targetKey: 'deviceId'});
    deviceRelationships.belongsTo(models.devices, {foreignKey: 'childDeviceId', targetKey: 'deviceId'});
  }

  return deviceRelationships;
};
