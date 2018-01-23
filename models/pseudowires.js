/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let pseudowires = sequelize.define('pseudowires',
		{
			pseudowireId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'pseudowire_id'
			},
			deviceId: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				allowNull: false,
				field: 'device_id'
			},
			portId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'port_id'
			},
			peerDeviceId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'peer_device_id'
			},
			peerLdpId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'peer_ldp_id'
			},
			cpwVcId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'cpwVcID'
			},
			cpwOid: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'cpwOid'
			},
			pwType: {
				type: DataTypes.STRING(32),
				allowNull: false,
				field: 'pw_type'
			},
			pwPsntype: {
				type: DataTypes.STRING(32),
				allowNull: false,
				field: 'pw_psntype'
			},
			pwLocalMtu: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'pw_local_mtu'
			},
			pwPeerMtu: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'pw_peer_mtu'
			},
			pwDescr: {
				type: DataTypes.STRING(128),
				allowNull: false,
				field: 'pw_descr'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'pseudowires'
		}
	);

	pseudowires.associate = function(models) {
		pseudowires.belongsTo(models.devices, {foreignKey: 'deviceId', targetKey: 'deviceId', onDelete: 'CASCADE'});
		pseudowires.belongsTo(models.ports, {foreignKey: 'portId', targetKey: 'portId', onDelete: 'CASCADE'});
	}

	return pseudowires;
};
