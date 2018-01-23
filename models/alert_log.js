/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let alertLog = sequelize.define('alertLog',
		{
			id: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'id'
			},
			ruleId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'rule_id'
			},
			deviceId: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				allowNull: false,
				field: 'device_id'
			},
			state: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'state'
			},
			details: {
				type: "LONGBLOB",
				allowNull: true,
				field: 'details'
			},
			timeLogged: {
				type: DataTypes.DATE,
				allowNull: false,
				defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
				field: 'time_logged'
			}
		}, {
			// don't add the timestamp attributes (updatedAt, createdAt)
      timestamps: false,

      // don't use camelcase for automatically added attributes but underscore style
      // so updatedAt will be updated_at
      underscored: true,

      // define the table's name
			tableName: 'alert_log'
		}
	);

	alertLog.associate = function(models) {
    alertLog.belongsTo(models.devices, {foreignKey: 'deviceId', targetKey: 'deviceId'});
  }

  return alertLog;
};
