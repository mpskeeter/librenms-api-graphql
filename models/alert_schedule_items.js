/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let alertScheduleItems = sequelize.define('alertScheduleItems',
		{
			itemId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'item_id'
			},
			scheduleId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'schedule_id'
			},
			target: {
				type: DataTypes.STRING(255),
				allowNull: false,
				field: 'target'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'alert_schedule_items'
		}
	);

	alertScheduleItems.associate = function(models) {
    alertScheduleItems.belongsTo(models.alertSchedule, {foreignKey: 'scheduleId', targetKey: 'scheduleId', onDelete: 'CASCADE'});
  }

  return alertScheduleItems;
};
