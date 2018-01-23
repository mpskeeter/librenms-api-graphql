/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let ipv4Networks = sequelize.define('ipv4Networks',
		{
			ipv4NetworkId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'ipv4_network_id'
			},
			ipv4Network: {
				type: DataTypes.STRING(64),
				allowNull: false,
				field: 'ipv4_network'
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
			tableName: 'ipv4_networks'
		}
	);

	ipv4Networks.associate = function(models) {
		ipv4Networks.hasMany(models.ipv4Addresses, {foreignKey: 'ipv4NetworkId', sourceKey: 'ipv4NetworkId'});
	}

	return ipv4Networks;
};
