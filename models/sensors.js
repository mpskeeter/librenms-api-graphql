/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let sensors = sequelize.define('sensors',
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
				defaultValue: '0',
				// references: {
				// 	model: 'devices',
				// 	key: 'device_id'
				// },
				field: 'device_id'
			},
			pollerType: {
				type: DataTypes.STRING(16),
				allowNull: false,
				defaultValue: 'snmp',
				field: 'poller_type'
			},
			sensorOid: {
				type: DataTypes.STRING(255),
				allowNull: false,
				field: 'sensor_oid'
			},
			sensorIndex: {
				type: DataTypes.STRING(128),
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
				type: DataTypes.BIGINT,
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
			sensorCurrent: {
				type: DataTypes.FLOAT,
				allowNull: true,
				field: 'sensor_current'
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
			// lastupdate: {
			// 	type: DataTypes.DATE,
			// 	allowNull: false,
			// 	defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
			// 	// field: 'lastupdate'
			// },
			sensorPrev: {
				type: DataTypes.FLOAT,
				allowNull: true,
				field: 'sensor_prev'
			},
			userFunc: {
				type: DataTypes.STRING(100),
				allowNull: true,
				field: 'user_func'
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

		  // I want updatedAt to actually be called updateTimestamp
		  updatedAt: 'lastupdate',

		  // And deletedAt to be called destroyTime (remember to enable paranoid for this to work)
		  deletedAt: false,

			// define the table's name
			tableName: 'sensors'
		}
	);

	sensors.associate = function(models) {
		sensors.belongsTo(models.devices, {foreignKey: 'deviceId', sourceKey: 'deviceId', onDelete: 'CASCADE'});
		sensors.hasMany(models.sensorsToStateIndexes, {foreignKey: 'sensorId', sourceKey: 'sensorId', onDelete: 'CASCADE'});
	}

	return sensors;
};
