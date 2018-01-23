/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let ipsecTunnels = sequelize.define('ipsecTunnels',
		{
			tunnelId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'tunnel_id'
			},
			deviceId: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				allowNull: false,
				field: 'device_id'
			},
			peerPort: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'peer_port'
			},
			peerAddr: {
				type: DataTypes.STRING(64),
				allowNull: false,
				field: 'peer_addr'
			},
			localAddr: {
				type: DataTypes.STRING(64),
				allowNull: false,
				field: 'local_addr'
			},
			localPort: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'local_port'
			},
			tunnelName: {
				type: DataTypes.STRING(96),
				allowNull: false,
				field: 'tunnel_name'
			},
			tunnelStatus: {
				type: DataTypes.STRING(11),
				allowNull: false,
				field: 'tunnel_status'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'ipsec_tunnels'
		}
	);

	ipsecTunnels.associate = function(models) {
		ipsecTunnels.belongsTo(models.devices, {foreignKey: 'deviceId', sourceKey: 'deviceId', onDelete: 'CASCADE'});
	}

	return ipsecTunnels;
};
