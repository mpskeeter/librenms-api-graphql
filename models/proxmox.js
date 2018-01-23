/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let proxmox = sequelize.define('proxmox',
		{
			id: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'id'
			},
			deviceId: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				allowNull: false,
				defaultValue: '0',
				field: 'device_id'
			},
			vmid: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'vmid'
			},
			cluster: {
				type: DataTypes.STRING(255),
				allowNull: false,
				field: 'cluster'
			},
			description: {
				type: DataTypes.STRING(255),
				allowNull: true,
				field: 'description'
			},
			lastSeen: {
				type: DataTypes.DATE,
				allowNull: false,
				defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
				field: 'last_seen'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'proxmox'
		}
	);

	proxmox.associate = function(models) {
		proxmox.belongsTo(models.devices, {foreignKey: 'deviceId', targetKey: 'deviceId'});
		proxmox.belongsTo(models.vminfo, {foreignKey: 'vmid', targetKey: 'id'});
	}

	return proxmox;
};
