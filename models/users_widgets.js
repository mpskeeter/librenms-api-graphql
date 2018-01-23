/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let usersWidgets = sequelize.define('usersWidgets',
		{
			userWidgetId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'user_widget_id'
			},
			userId: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				allowNull: false,
				field: 'user_id'
			},
			widgetId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'widget_id'
			},
			col: {
				type: DataTypes.INTEGER(4),
				allowNull: false,
				field: 'col'
			},
			row: {
				type: DataTypes.INTEGER(4),
				allowNull: false,
				field: 'row'
			},
			sizeX: {
				type: DataTypes.INTEGER(4),
				allowNull: false,
				field: 'size_x'
			},
			sizeY: {
				type: DataTypes.INTEGER(4),
				allowNull: false,
				field: 'size_y'
			},
			title: {
				type: DataTypes.STRING(255),
				allowNull: false,
				field: 'title'
			},
			refresh: {
				type: DataTypes.INTEGER(4),
				allowNull: false,
				defaultValue: '60',
				field: 'refresh'
			},
			settings: {
				type: DataTypes.TEXT,
				allowNull: false,
				field: 'settings'
			},
			dashboardId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'dashboard_id'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'users_widgets'
		}
	);

	usersWidgets.associate = function(models) {
		usersWidgets.belongsTo(models.dashboards, {foreignKey: 'dashboardId', sourceKey: 'dashboardId', onDelete: 'CASCADE'})
		usersWidgets.belongsTo(models.users, {foreignKey: 'userId', sourceKey: 'userId', onDelete: 'CASCADE'})
		usersWidgets.belongsTo(models.widgets, {foreignKey: 'widgetId', sourceKey: 'widgetId', onDelete: 'CASCADE'})
	}

	return usersWidgets;
};
