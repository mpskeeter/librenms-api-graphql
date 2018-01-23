/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let proxmoxPorts = sequelize.define('proxmoxPorts',
		{
			id: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'id'
			},
			vmId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'vm_id'
			},
			port: {
				type: DataTypes.STRING(10),
				allowNull: false,
				field: 'port'
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
			tableName: 'proxmox_ports'
		}
	);

	proxmoxPorts.associate = function(models) {
		proxmoxPorts.belongsTo(models.vminfo, {foreignKey: 'vmId', targetKey: 'id'});
	}

	return proxmoxPorts;
};
