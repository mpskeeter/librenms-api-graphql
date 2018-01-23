/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let ipv6Addresses = sequelize.define('ipv6Addresses',
		{
			ipv6AddressId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'ipv6_address_id',
			},
			ipv6Address: {
				type: DataTypes.STRING(128),
				allowNull: false,
				field: 'ipv6_address',
				validate: {
					isIPv6: true,             // checks for IPv6 format
				},
			},
			ipv6Compressed: {
				type: DataTypes.STRING(128),
				allowNull: false,
				field: 'ipv6_compressed',
			},
			ipv6Prefixlen: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'ipv6_prefixlen',
			},
			ipv6Origin: {
				type: DataTypes.STRING(16),
				allowNull: false,
				field: 'ipv6_origin',
			},
			ipv6NetworkId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'ipv6_network_id',
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
			tableName: 'ipv6_addresses'
		}
	);

	ipv6Addresses.associate = function(models) {
		ipv6Addresses.belongsTo(models.ports, {foreignKey: 'portId', sourceKey: 'portId', onDelete: 'CASCADE'});
		ipv6Addresses.belongsTo(models.ipv6Networks, {foreignKey: 'ipv6NetworkId', sourceKey: 'ipv6NetworkId', onDelete: 'CASCADE'});
	}

	return ipv6Addresses;
};
