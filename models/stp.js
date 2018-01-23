/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let stp = sequelize.define('stp',
		{
			stpId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'stp_id'
			},
			deviceId: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				allowNull: false,
				field: 'device_id'
			},
			rootBridge: {
				type: DataTypes.INTEGER(1),
				allowNull: false,
				field: 'rootBridge'
			},
			bridgeAddress: {
				type: DataTypes.STRING(32),
				allowNull: false,
				field: 'bridgeAddress'
			},
			protocolSpecification: {
				type: DataTypes.STRING(16),
				allowNull: false,
				field: 'protocolSpecification'
			},
			priority: {
				type: DataTypes.INTEGER(9),
				allowNull: false,
				field: 'priority'
			},
			timeSinceTopologyChange: {
				type: DataTypes.STRING(32),
				allowNull: false,
				field: 'timeSinceTopologyChange'
			},
			topChanges: {
				type: DataTypes.INTEGER(9),
				allowNull: false,
				field: 'topChanges'
			},
			designatedRoot: {
				type: DataTypes.STRING(32),
				allowNull: false,
				field: 'designatedRoot'
			},
			rootCost: {
				type: DataTypes.INTEGER(9),
				allowNull: false,
				field: 'rootCost'
			},
			rootPort: {
				type: DataTypes.INTEGER(9),
				allowNull: false,
				field: 'rootPort'
			},
			maxAge: {
				type: DataTypes.INTEGER(9),
				allowNull: false,
				field: 'maxAge'
			},
			helloTime: {
				type: DataTypes.INTEGER(9),
				allowNull: false,
				field: 'helloTime'
			},
			holdTime: {
				type: DataTypes.INTEGER(9),
				allowNull: false,
				field: 'holdTime'
			},
			forwardDelay: {
				type: DataTypes.INTEGER(9),
				allowNull: false,
				field: 'forwardDelay'
			},
			bridgeMaxAge: {
				type: DataTypes.INTEGER(6),
				allowNull: false,
				field: 'bridgeMaxAge'
			},
			bridgeHelloTime: {
				type: DataTypes.INTEGER(6),
				allowNull: false,
				field: 'bridgeHelloTime'
			},
			bridgeForwardDelay: {
				type: DataTypes.INTEGER(6),
				allowNull: false,
				field: 'bridgeForwardDelay'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'stp'
		}
	);

	stp.associate = function(models) {
		stp.belongsTo(models.devices, {foreignKey: 'deviceId', targetKey: 'deviceId', onDelete: 'CASCADE'});
	}

	return stp;
};
