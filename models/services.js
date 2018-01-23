/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let services = sequelize.define('services',
		{
			serviceId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'service_id'
			},
			deviceId: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				allowNull: false,
				field: 'device_id'
			},
			serviceIp: {
				type: DataTypes.TEXT,
				allowNull: false,
				field: 'service_ip'
			},
			serviceType: {
				type: DataTypes.STRING(255),
				allowNull: false,
				field: 'service_type'
			},
			serviceDesc: {
				type: DataTypes.TEXT,
				allowNull: false,
				field: 'service_desc'
			},
			serviceParam: {
				type: DataTypes.TEXT,
				allowNull: false,
				field: 'service_param'
			},
			serviceIgnore: {
				type: DataTypes.INTEGER(1),
				allowNull: false,
				field: 'service_ignore'
			},
			serviceStatus: {
				type: DataTypes.INTEGER(4),
				allowNull: false,
				defaultValue: '0',
				field: 'service_status'
			},
			serviceChanged: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				defaultValue: '0',
				field: 'service_changed'
			},
			serviceMessage: {
				type: DataTypes.TEXT,
				allowNull: false,
				field: 'service_message'
			},
			serviceDisabled: {
				type: DataTypes.INTEGER(1),
				allowNull: false,
				defaultValue: '0',
				field: 'service_disabled'
			},
			serviceDs: {
				type: DataTypes.STRING(255),
				allowNull: false,
				field: 'service_ds'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'services'
		}
	);

	services.associate = function(models) {
    services.belongsTo(models.devices, {foreignKey: 'deviceId', targetKey: 'deviceId', onDelete: 'CASCADE'});
  }

	return services;
};
