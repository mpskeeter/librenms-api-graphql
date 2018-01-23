/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let links = sequelize.define('links',
		{
			id: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'id'
			},
			localPortId: {
				type: DataTypes.INTEGER(11),
				allowNull: true,
				field: 'local_port_id'
			},
			localDeviceId: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				allowNull: false,
				field: 'local_device_id'
			},
			remotePortId: {
				type: DataTypes.INTEGER(11),
				allowNull: true,
				field: 'remote_port_id'
			},
			active: {
				type: DataTypes.INTEGER(4),
				allowNull: false,
				defaultValue: '1',
				field: 'active'
			},
			protocol: {
				type: DataTypes.STRING(11),
				allowNull: true,
				field: 'protocol'
			},
			remoteHostname: {
				type: DataTypes.STRING(128),
				allowNull: false,
				field: 'remote_hostname'
			},
			remoteDeviceId: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				allowNull: false,
				field: 'remote_device_id'
			},
			remotePort: {
				type: DataTypes.STRING(128),
				allowNull: false,
				field: 'remote_port'
			},
			remotePlatform: {
				type: DataTypes.STRING(256),
				allowNull: true,
				field: 'remote_platform'
			},
			remoteVersion: {
				type: DataTypes.STRING(256),
				allowNull: false,
				field: 'remote_version'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'links'
		}
	);

	links.associate = function(models) {
		// links.belongsTo(models.devices, {foreignKey: 'localDeviceId', sourceKey: 'deviceId'})
		// links.belongsTo(models.devices, {foreignKey: 'remoteDeviceId', sourceKey: 'deviceId'})
	}

	return links;
};
