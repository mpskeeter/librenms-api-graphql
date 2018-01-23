/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let portsFdb = sequelize.define('portsFdb',
		{
			portId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'port_id'
			},
			macAddress: {
				type: DataTypes.STRING(32),
				allowNull: false,
				field: 'mac_address'
			},
			vlanId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'vlan_id'
			},
			deviceId: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				allowNull: false,
				field: 'device_id'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'ports_fdb'
		}
	);

	portsFdb.associate = function(models) {
		portsFdb.belongsTo(models.devices, {foreignKey: 'deviceId', targetKey: 'deviceId', onDelete: 'CASCADE'});
		portsFdb.belongsTo(models.ports, {foreignKey: 'portId', targetKey: 'portId', onDelete: 'CASCADE'});
		portsFdb.belongsTo(models.vlans, {foreignKey: 'vlanId', targetKey: 'vlanId', onDelete: 'CASCADE'});
	}

	return portsFdb;
};
