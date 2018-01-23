/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let hrDevice = sequelize.define('hrDevice',
		{
			hrDeviceId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'hrDevice_id'
			},
			deviceId: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				allowNull: false,
				field: 'device_id'
			},
			hrDeviceIndex: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				// field: 'hrDeviceIndex'
			},
			hrDeviceDescr: {
				type: DataTypes.TEXT,
				allowNull: false,
				// field: 'hrDeviceDescr'
			},
			hrDeviceType: {
				type: DataTypes.TEXT,
				allowNull: false,
				// field: 'hrDeviceType'
			},
			hrDeviceErrors: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				defaultValue: '0',
				// field: 'hrDeviceErrors'
			},
			hrDeviceStatus: {
				type: DataTypes.TEXT,
				allowNull: false,
				// field: 'hrDeviceStatus'
			},
			hrProcessorLoad: {
				type: DataTypes.INTEGER(4),
				allowNull: true,
				// field: 'hrProcessorLoad'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'hrDevice'
		}
	);

	hrDevice.associate = function(models) {
		hrDevice.belongsTo(models.devices, {foreignKey: 'deviceId', sourceKey: 'deviceId'});
		// hrDevice.hasMany(models.mempools, {foreignKey: 'hrDeviceId', sourceKey: 'hrDeviceId'});
		hrDevice.hasMany(models.processors, {foreignKey: 'hrDeviceId', sourceKey: 'hrDeviceId'});
	}

	return hrDevice;
};
