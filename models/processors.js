/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let processors = sequelize.define('processors',
		{
			processorId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'processor_id'
			},
			entPhysicalIndex: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				defaultValue: '0',
				// field: 'entPhysicalIndex'
			},
			hrDeviceId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				// field: 'hrDeviceIndex'
			},
			deviceId: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				allowNull: false,
				field: 'device_id'
			},
			processorOid: {
				type: DataTypes.STRING(128),
				allowNull: false,
				field: 'processor_oid'
			},
			processorIndex: {
				type: DataTypes.STRING(32),
				allowNull: false,
				field: 'processor_index'
			},
			processorType: {
				type: DataTypes.STRING(16),
				allowNull: false,
				field: 'processor_type'
			},
			processorUsage: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'processor_usage'
			},
			processorDescr: {
				type: DataTypes.STRING(64),
				allowNull: false,
				field: 'processor_descr'
			},
			processorPrecision: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				defaultValue: '1',
				field: 'processor_precision'
			},
			processorPercWarn: {
				type: DataTypes.INTEGER(11),
				allowNull: true,
				defaultValue: '75',
				field: 'processor_perc_warn'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'processors'
		}
	);

	processors.associate = function(models) {
    processors.belongsTo(models.devices, {foreignKey: 'deviceId', targetKey: 'deviceId'});
		processors.belongsTo(models.hrDevice, {foreignKey: 'hrDeviceId', targetKey: 'hrDeviceId'});
  }

	return processors;
};
