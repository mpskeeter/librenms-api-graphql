/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let alerts = sequelize.define('alerts',
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
			ruleId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'rule_id'
			},
			state: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'state'
			},
			alerted: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'alerted'
			},
			open: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'open'
			},
			timestamp: {
				type: DataTypes.DATE,
				allowNull: false,
				defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
				field: 'timestamp'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'alerts'
		}
	);

	alerts.associate = function(models) {
		alerts.belongsTo(models.devices, {foreignKey: 'deviceId', targetKey: 'deviceId', onDelete: 'CASCADE'});
		alerts.belongsTo(models.alertRules, {foreignKey: 'ruleId', targetKey: 'id', onDelete: 'CASCADE'});
  }

  return alerts;
};
