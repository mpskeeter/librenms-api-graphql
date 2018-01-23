/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let portsVlans = sequelize.define('portsVlans',
		{
			portVlanId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'port_vlan_id'
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
			vlan: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'vlan'
			},
			baseport: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'baseport'
			},
			priority: {
				type: DataTypes.BIGINT,
				allowNull: false,
				field: 'priority'
			},
			state: {
				type: DataTypes.STRING(16),
				allowNull: false,
				field: 'state'
			},
			cost: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'cost'
			},
			untagged: {
				type: DataTypes.INTEGER(4),
				allowNull: false,
				defaultValue: '0',
				field: 'untagged'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'ports_vlans'
		}
	);

	portsVlans.associate = function(models) {
		portsVlans.belongsTo(models.devices, {foreignKey: 'deviceId', targetKey: 'deviceId'});
		portsVlans.belongsTo(models.ports, {foreignKey: 'portId', targetKey: 'portId'});
	}

	return portsVlans;
};
