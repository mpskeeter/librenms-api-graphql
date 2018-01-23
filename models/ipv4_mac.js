/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let ipv4Mac = sequelize.define('ipv4Mac',
		{
			portId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'port_id'
			},
			deviceId: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				allowNull: true,
				field: 'device_id'
			},
			macAddress: {
				type: DataTypes.STRING(32),
				allowNull: false,
				field: 'mac_address'
			},
			ipv4Address: {
				type: DataTypes.STRING(32),
				allowNull: false,
				field: 'ipv4_address',
				validate: {
					isIPv4: true,             // checks for IPv4 (129.89.23.1)
				},
			},
			contextName: {
				type: DataTypes.STRING(128),
				allowNull: true,
				field: 'context_name'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'ipv4_mac'
		}
	);

	ipv4Mac.associate = function(models) {
		ipv4Mac.belongsTo(models.ports, {foreignKey: 'portId', sourceKey: 'portId', onDelete: 'CASCADE'});
		ipv4Mac.belongsTo(models.devices, {foreignKey: 'deviceId', sourceKey: 'deviceId', onDelete: 'CASCADE'});
	}

	return ipv4Mac;
};
