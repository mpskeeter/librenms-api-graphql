/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let pdbIxPeers = sequelize.define('pdbIxPeers',
		{
			pdbIxPeersId: {
				type: DataTypes.INTEGER(10).UNSIGNED,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'pdb_ix_peers_id'
			},
			ixId: {
				type: DataTypes.INTEGER(10).UNSIGNED,
				allowNull: false,
				field: 'ix_id'
			},
			peerId: {
				type: DataTypes.INTEGER(10).UNSIGNED,
				allowNull: false,
				field: 'peer_id'
			},
			remoteAsn: {
				type: DataTypes.STRING(16),
				allowNull: false,
				field: 'remote_asn'
			},
			remoteIpaddr4: {
				type: DataTypes.STRING(15),
				allowNull: true,
				field: 'remote_ipaddr4',
				validate: {
					isIPv4: true,             // checks for IPv4 (129.89.23.1)
				},
			},
			remoteIpaddr6: {
				type: DataTypes.STRING(128),
				allowNull: true,
				field: 'remote_ipaddr6',
				validate: {
					isIPv6: true,             // checks for IPv4 (129.89.23.1)
				},
			},
			name: {
				type: DataTypes.STRING(255),
				allowNull: true,
				field: 'name'
			},
			timestamp: {
				type: DataTypes.INTEGER(10).UNSIGNED,
				allowNull: true,
				field: 'timestamp'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'pdb_ix_peers'
		}
	);

	pdbIxPeers.associate = function(models) {
		//
	}

	return pdbIxPeers;
};
