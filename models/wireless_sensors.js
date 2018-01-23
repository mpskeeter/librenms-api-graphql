/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let wirelessSensors = sequelize.define('wirelessSensors',
		{
			sensorId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'sensor_id'
			},
			sensorDeleted: {
				type: DataTypes.INTEGER(1),
				allowNull: false,
				defaultValue: '0',
				field: 'sensor_deleted'
			},
			sensorClass: {
				type: DataTypes.STRING(64),
				allowNull: false,
				field: 'sensor_class'
			},
			deviceId: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				allowNull: false,
				field: 'device_id'
			},
			sensorIndex: {
				type: DataTypes.STRING(64),
				allowNull: true,
				field: 'sensor_index'
			},
			sensorType: {
				type: DataTypes.STRING(255),
				allowNull: false,
				field: 'sensor_type'
			},
			sensorDescr: {
				type: DataTypes.STRING(255),
				allowNull: true,
				field: 'sensor_descr'
			},
			sensorDivisor: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				defaultValue: '1',
				field: 'sensor_divisor'
			},
			sensorMultiplier: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				defaultValue: '1',
				field: 'sensor_multiplier'
			},
			sensorAggregator: {
				type: DataTypes.STRING(16),
				allowNull: false,
				defaultValue: 'sum',
				field: 'sensor_aggregator'
			},
			sensorCurrent: {
				type: DataTypes.FLOAT,
				allowNull: true,
				field: 'sensor_current'
			},
			sensorPrev: {
				type: DataTypes.FLOAT,
				allowNull: true,
				field: 'sensor_prev'
			},
			sensorLimit: {
				type: DataTypes.FLOAT,
				allowNull: true,
				field: 'sensor_limit'
			},
			sensorLimitWarn: {
				type: DataTypes.FLOAT,
				allowNull: true,
				field: 'sensor_limit_warn'
			},
			sensorLimitLow: {
				type: DataTypes.FLOAT,
				allowNull: true,
				field: 'sensor_limit_low'
			},
			sensorLimitLowWarn: {
				type: DataTypes.FLOAT,
				allowNull: true,
				field: 'sensor_limit_low_warn'
			},
			sensorAlert: {
				type: DataTypes.INTEGER(1),
				allowNull: false,
				defaultValue: '1',
				field: 'sensor_alert'
			},
			sensorCustom: {
				type: DataTypes.ENUM('No','Yes'),
				allowNull: false,
				defaultValue: 'No',
				field: 'sensor_custom'
			},
			entPhysicalIndex: {
				type: DataTypes.STRING(16),
				allowNull: true,
				field: 'entPhysicalIndex'
			},
			entPhysicalIndexMeasured: {
				type: DataTypes.STRING(16),
				allowNull: true,
				field: 'entPhysicalIndex_measured'
			},
			lastupdate: {
				type: DataTypes.DATE,
				allowNull: false,
				defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
				field: 'lastupdate'
			},
			sensorOids: {
				type: DataTypes.TEXT,
				allowNull: false,
				field: 'sensor_oids'
			},
			accessPointId: {
				type: DataTypes.INTEGER(11),
				allowNull: true,
				field: 'access_point_id'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
		  timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
		  // so updatedAt will be updated_at
		  underscored: true,

			// define the table's name
			tableName: 'wireless_sensors'
		}
	);

	wirelessSensors.associate = function(models) {
		wirelessSensors.belongsTo(models.devices, {foreignKey: 'deviceId', targetKey: 'deviceId', onDelete: 'CASCADE'});
	}

	return wirelessSensors;
};
