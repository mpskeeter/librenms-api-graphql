/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let widgets = sequelize.define('widgets',
		{
			widgetId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'widget_id'
			},
			widgetTitle: {
				type: DataTypes.STRING(255),
				allowNull: false,
				field: 'widget_title'
			},
			widget: {
				type: DataTypes.STRING(255),
				allowNull: false,
				unique: true,
				field: 'widget'
			},
			baseDimensions: {
				type: DataTypes.STRING(10),
				allowNull: false,
				field: 'base_dimensions'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
		  timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
		  // so updatedAt will be updated_at
		  underscored: true,

			// define the table's name
			tableName: 'widgets'
		}
	);

	widgets.associate = function(models) {
		widgets.hasMany(models.usersWidgets, {foreignKey: 'widgetId', sourceKey: 'widgetId'})		
	}

	return widgets;
};
