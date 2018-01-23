/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let bgpPeersCbgp = sequelize.define('bgpPeersCbgp',
		{
			deviceId: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				allowNull: false,
				field: 'device_id'
			},
			bgpPeerIdentifier: {
				type: DataTypes.STRING(64),
				allowNull: false,
				field: 'bgpPeerIdentifier'
			},
			afi: {
				type: DataTypes.STRING(16),
				allowNull: false,
				field: 'afi'
			},
			safi: {
				type: DataTypes.STRING(16),
				allowNull: false,
				field: 'safi'
			},
			acceptedPrefixes: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'AcceptedPrefixes'
			},
			deniedPrefixes: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'DeniedPrefixes'
			},
			prefixAdminLimit: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'PrefixAdminLimit'
			},
			prefixThreshold: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'PrefixThreshold'
			},
			prefixClearThreshold: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'PrefixClearThreshold'
			},
			advertisedPrefixes: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'AdvertisedPrefixes'
			},
			suppressedPrefixes: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'SuppressedPrefixes'
			},
			withdrawnPrefixes: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'WithdrawnPrefixes'
			},
			acceptedPrefixesDelta: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'AcceptedPrefixes_delta'
			},
			acceptedPrefixesPrev: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'AcceptedPrefixes_prev'
			},
			deniedPrefixesDelta: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'DeniedPrefixes_delta'
			},
			deniedPrefixesPrev: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'DeniedPrefixes_prev'
			},
			advertisedPrefixesDelta: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'AdvertisedPrefixes_delta'
			},
			advertisedPrefixesPrev: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'AdvertisedPrefixes_prev'
			},
			suppressedPrefixesDelta: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'SuppressedPrefixes_delta'
			},
			suppressedPrefixesPrev: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'SuppressedPrefixes_prev'
			},
			withdrawnPrefixesDelta: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'WithdrawnPrefixes_delta'
			},
			withdrawnPrefixesPrev: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'WithdrawnPrefixes_prev'
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
			tableName: 'bgpPeers_cbgp'
		}
	);

	bgpPeersCbgp.associate = function(models) {
		bgpPeersCbgp.belongsTo(models.devices, {foreignKey: 'deviceId', sourceKey: 'deviceId', onDelete: 'CASCADE'});
	}

	return bgpPeersCbgp;
};
