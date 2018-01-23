/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let netscalerVservers = sequelize.define('netscalerVservers',
		{
			vsvrId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'vsvr_id'
			},
			deviceId: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				allowNull: false,
				field: 'device_id'
			},
			vsvrName: {
				type: DataTypes.STRING(128),
				allowNull: false,
				field: 'vsvr_name'
			},
			vsvrIp: {
				type: DataTypes.STRING(128),
				allowNull: false,
				field: 'vsvr_ip'
			},
			vsvrPort: {
				type: DataTypes.INTEGER(8),
				allowNull: false,
				field: 'vsvr_port'
			},
			vsvrType: {
				type: DataTypes.STRING(64),
				allowNull: false,
				field: 'vsvr_type'
			},
			vsvrState: {
				type: DataTypes.STRING(32),
				allowNull: false,
				field: 'vsvr_state'
			},
			vsvrClients: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'vsvr_clients'
			},
			vsvrServer: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'vsvr_server'
			},
			vsvrReqRate: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'vsvr_req_rate'
			},
			vsvrBpsIn: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'vsvr_bps_in'
			},
			vsvrBpsOut: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'vsvr_bps_out'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'netscaler_vservers'
		}
	);

	netscalerVservers.associate = function(models) {
		netscalerVservers.belongsTo(models.devices, {foreignKey: 'deviceId', sourceKey: 'deviceId', onDelete: 'CASCADE'});
	}

	return netscalerVservers;
};
