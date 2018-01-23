/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let ipv6Networks = sequelize.define('ipv6Networks',
		{
			ipv6NetworkId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'ipv6_network_id'
			},
			ipv6Network: {
				type: DataTypes.STRING(64),
				allowNull: false,
				field: 'ipv6_network'
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
			tableName: 'ipv6_networks'
		}
	);

	ipv6Networks.associate = function(models) {
		ipv6Networks.hasMany(models.ipv6Addresses, {foreignKey: 'ipv6NetworkId', sourceKey: 'ipv6NetworkId'});
	}

	return ipv6Networks;
};
