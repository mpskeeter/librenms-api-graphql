/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let alertSchedule = sequelize.define('alertSchedule',
		{
			scheduleId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'schedule_id'
			},
			recurring: {
				type: DataTypes.INTEGER(1).UNSIGNED,
				allowNull: false,
				defaultValue: '0',
				field: 'recurring'
			},
			start: {
				type: DataTypes.DATE,
				allowNull: false,
				defaultValue: '1970-01-02 00:00:01',
				field: 'start'
			},
			end: {
				type: DataTypes.DATE,
				allowNull: false,
				defaultValue: '1970-01-02 00:00:01',
				field: 'end'
			},
			startRecurringDt: {
				type: DataTypes.DATEONLY,
				allowNull: false,
				defaultValue: '1970-01-01',
				field: 'start_recurring_dt'
			},
			endRecurringDt: {
				type: DataTypes.DATEONLY,
				allowNull: true,
				field: 'end_recurring_dt'
			},
			startRecurringHr: {
				type: DataTypes.TIME,
				allowNull: false,
				defaultValue: '00:00:00',
				field: 'start_recurring_hr'
			},
			endRecurringHr: {
				type: DataTypes.TIME,
				allowNull: false,
				defaultValue: '00:00:00',
				field: 'end_recurring_hr'
			},
			recurringDay: {
				type: DataTypes.STRING(15),
				allowNull: true,
				field: 'recurring_day'
			},
			title: {
				type: DataTypes.STRING(255),
				allowNull: false,
				field: 'title'
			},
			notes: {
				type: DataTypes.TEXT,
				allowNull: false,
				field: 'notes'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'alert_schedule'
		}
	);

	alertSchedule.associate = function(models) {
		alertSchedule.hasMany(models.alertScheduleItems, {foreignKey: 'scheduleId', targetKey: 'scheduleId'});
  }

  return alertSchedule;
};
