/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let alertRules = sequelize.define('alertRules',
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
				defaultValue: 0,
				field: 'device_id'
			},
			rule: {
				type: DataTypes.TEXT,
				allowNull: false,
				field: 'rule'
			},
			severity: {
				type: DataTypes.ENUM('ok','warning','critical'),
				allowNull: false,
				field: 'severity'
			},
			extra: {
				type: DataTypes.STRING(255),
				allowNull: false,
				field: 'extra'
			},
			disabled: {
				type: DataTypes.INTEGER(1),
				allowNull: false,
				field: 'disabled'
			},
			name: {
				type: DataTypes.STRING(255),
				allowNull: false,
				unique: true,
				field: 'name'
			},
			query: {
				type: DataTypes.TEXT,
				allowNull: false,
				field: 'query'
			},
			proc: {
				type: DataTypes.STRING(80),
				allowNull: true,
				field: 'proc'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'alert_rules'
		}
	);

	alertRules.associate = function(models) {
    alertRules.belongsTo(models.devices, {foreignKey: 'deviceId', targetKey: 'deviceId'});
		alertRules.hasMany(models.alerts, {foreignKey: 'id', targetKey: 'ruleId'});
  }

  return alertRules;
};
