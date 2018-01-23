/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let bgpPeers = sequelize.define('bgpPeers',
		{
			bgpPeerId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'bgpPeer_id'
			},
			deviceId: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				allowNull: false,
				field: 'device_id'
			},
			astext: {
				type: DataTypes.STRING(255),
				allowNull: false,
				// field: 'astext'
			},
			bgpPeerIdentifier: {
				type: DataTypes.TEXT,
				allowNull: false,
				// field: 'bgpPeerIdentifier'
			},
			bgpPeerRemoteAs: {
				type: DataTypes.BIGINT,
				allowNull: false,
				// field: 'bgpPeerRemoteAs'
			},
			bgpPeerState: {
				type: DataTypes.TEXT,
				allowNull: false,
				// field: 'bgpPeerState'
			},
			bgpPeerAdminStatus: {
				type: DataTypes.TEXT,
				allowNull: false,
				// field: 'bgpPeerAdminStatus'
			},
			bgpLocalAddr: {
				type: DataTypes.TEXT,
				allowNull: false,
				// field: 'bgpLocalAddr'
			},
			bgpPeerRemoteAddr: {
				type: DataTypes.TEXT,
				allowNull: false,
				// field: 'bgpPeerRemoteAddr'
			},
			bgpPeerInUpdates: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				// field: 'bgpPeerInUpdates'
			},
			bgpPeerOutUpdates: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				// field: 'bgpPeerOutUpdates'
			},
			bgpPeerInTotalMessages: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				// field: 'bgpPeerInTotalMessages'
			},
			bgpPeerOutTotalMessages: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				// field: 'bgpPeerOutTotalMessages'
			},
			bgpPeerFsmEstablishedTime: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				// field: 'bgpPeerFsmEstablishedTime'
			},
			bgpPeerInUpdateElapsedTime: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				// field: 'bgpPeerInUpdateElapsedTime'
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
			tableName: 'bgpPeers'
		}
	);

	bgpPeers.associate = function(models) {
		bgpPeers.belongsTo(models.devices, {foreignKey: 'deviceId', sourceKey: 'deviceId', onDelete: 'CASCADE'});
	}

	return bgpPeers;
};
