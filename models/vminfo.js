/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('vminfo',
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
				field: 'device_id'
			},
			vmType: {
				type: DataTypes.STRING(16),
				allowNull: false,
				defaultValue: 'vmware',
				field: 'vm_type'
			},
			vmwVmVmid: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'vmwVmVMID'
			},
			vmwVmDisplayName: {
				type: DataTypes.STRING(128),
				allowNull: false,
				field: 'vmwVmDisplayName'
			},
			vmwVmGuestOs: {
				type: DataTypes.STRING(128),
				allowNull: false,
				field: 'vmwVmGuestOS'
			},
			vmwVmMemSize: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'vmwVmMemSize'
			},
			vmwVmCpus: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'vmwVmCpus'
			},
			vmwVmState: {
				type: DataTypes.STRING(128),
				allowNull: false,
				field: 'vmwVmState'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'vminfo'
		}
	);

	vminfo.associate = function(models) {
		const stdAssociation = {foreignKey: 'vmid', targetKey: 'id'};

		vminfo.belongsTo(models.devices, {foreignKey: 'deviceId', targetKey: 'deviceId', onDelete: 'CASCADE'});

		vminfo.hasMany(models.proxmox,      stdAssociation);
		vminfo.hasMany(models.proxmoxPorts, stdAssociation);

	}

	return vminfo;
};
