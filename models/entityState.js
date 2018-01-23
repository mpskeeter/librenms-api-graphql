/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let entityState = sequelize.define('entityState',
		{
			entityStateId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'entity_state_id'
			},
			deviceId: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				allowNull: true,
				field: 'device_id'
			},
			entPhysicalId: {
				type: DataTypes.INTEGER(11),
				allowNull: true,
				field: 'entPhysical_id'
			},
			entStateLastChanged: {
				type: DataTypes.DATE,
				allowNull: true,
				field: 'entStateLastChanged'
			},
			entStateAdmin: {
				type: DataTypes.INTEGER(11),
				allowNull: true,
				field: 'entStateAdmin'
			},
			entStateOper: {
				type: DataTypes.INTEGER(11),
				allowNull: true,
				field: 'entStateOper'
			},
			entStateUsage: {
				type: DataTypes.INTEGER(11),
				allowNull: true,
				field: 'entStateUsage'
			},
			entStateAlarm: {
				type: DataTypes.TEXT,
				allowNull: true,
				field: 'entStateAlarm'
			},
			entStateStandby: {
				type: DataTypes.INTEGER(11),
				allowNull: true,
				field: 'entStateStandby'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'entityState'
		}
	);

	entityState.associate = function(models) {
		entityState.belongsTo(models.devices, {foreignKey: 'deviceId', sourceKey: 'deviceId', onDelete: 'CASCADE'});
		entityState.belongsTo(models.entPhysical, {foreignKey: 'entPhysicalId', sourceKey: 'entPhysicalId', onDelete: 'CASCADE'});
	}

	return entityState;
};
