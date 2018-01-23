/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let deviceGroupDevice = sequelize.define('deviceGroupDevice',
		{
			deviceGroupId: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				allowNull: false,
				primaryKey: true,
				// references: {
				// 	model: 'device_groups',
				// 	key: 'id'
				// },
				field: 'device_group_id'
			},
			deviceId: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				allowNull: false,
				primaryKey: true,
				// references: {
				// 	model: 'devices',
				// 	key: 'device_id'
				// },
				field: 'device_id'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
      timestamps: false,

      // don't use camelcase for automatically added attributes but underscore style
      // so updatedAt will be updated_at
      underscored: true,

      // define the table's name
			tableName: 'device_group_device'
		}
	);

	deviceGroupDevice.associate = function(models) {
    deviceGroupDevice.belongsTo(models.devices, {foreignKey: 'deviceId', sourceKey: 'deviceId'});
    deviceGroupDevice.belongsTo(models.deviceGroups, {foreignKey: 'deviceGroupId', sourceKey: 'id'});
	};

	return deviceGroupDevice;
};
