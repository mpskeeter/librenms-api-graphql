/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let ipv4Addresses = sequelize.define('ipv4Addresses',
		{
			ipv4AddressId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'ipv4_address_id',
			},
			ipv4Address: {
				type: DataTypes.STRING(32),
				allowNull: false,
				field: 'ipv4_address',
				validate: {
					isIPv4: true,             // checks for IPv4 (129.89.23.1)
				},
			},
			ipv4Prefixlen: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'ipv4_prefixlen',
			},
			ipv4NetworkId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'ipv4_network_id',
			},
			portId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'port_id',
			},
			contextName: {
				type: DataTypes.STRING(128),
				allowNull: true,
				field: 'context_name',
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'ipv4_addresses'
		}
	);

	ipv4Addresses.associate = function(models) {
		ipv4Addresses.belongsTo(models.ports, {foreignKey: 'portId', sourceKey: 'portId', onDelete: 'CASCADE'});
		ipv4Addresses.belongsTo(models.ipv4Networks, {foreignKey: 'ipv4NetworkId', sourceKey: 'ipv4NetworkId', onDelete: 'CASCADE'});
	}

	return ipv4Addresses;
};
