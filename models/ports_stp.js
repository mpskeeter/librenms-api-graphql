/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let portsStp = sequelize.define('portsStp',
		{
			portStpId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'port_stp_id'
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
			priority: {
				type: DataTypes.INTEGER(3).UNSIGNED,
				allowNull: false,
				field: 'priority'
			},
			state: {
				type: DataTypes.STRING(11),
				allowNull: false,
				field: 'state'
			},
			enable: {
				type: DataTypes.STRING(8),
				allowNull: false,
				field: 'enable'
			},
			pathCost: {
				type: DataTypes.INTEGER(10).UNSIGNED,
				allowNull: false,
				field: 'pathCost'
			},
			designatedRoot: {
				type: DataTypes.STRING(32),
				allowNull: false,
				field: 'designatedRoot'
			},
			designatedCost: {
				type: DataTypes.INTEGER(5).UNSIGNED,
				allowNull: false,
				field: 'designatedCost'
			},
			designatedBridge: {
				type: DataTypes.STRING(32),
				allowNull: false,
				field: 'designatedBridge'
			},
			designatedPort: {
				type: DataTypes.INTEGER(9),
				allowNull: false,
				field: 'designatedPort'
			},
			forwardTransitions: {
				type: DataTypes.INTEGER(10).UNSIGNED,
				allowNull: false,
				field: 'forwardTransitions'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'ports_stp'
		}
	);

	portsStp.associate = function(models) {
		portsStp.belongsTo(models.devices, {foreignKey: 'deviceId', targetKey: 'deviceId'});
		portsStp.belongsTo(models.ports, {foreignKey: 'portId', targetKey: 'portId'});
	}

	return portsStp;
};
