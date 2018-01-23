/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let portsStack = sequelize.define('portsStack',
		{
			deviceId: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				allowNull: false,
				field: 'device_id'
			},
			portIdHigh: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'port_id_high'
			},
			portIdLow: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'port_id_low'
			},
			ifStackStatus: {
				type: DataTypes.STRING(32),
				allowNull: false,
				field: 'ifStackStatus'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'ports_stack'
		}
	);

	portsStack.associate = function(models) {
		portsStack.belongsTo(models.devices, {foreignKey: 'deviceId', targetKey: 'deviceId'});
	}

	return portsStack;
};
