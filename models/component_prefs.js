/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let componentPrefs = sequelize.define('componentPrefs',
		{
			id: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'id'
			},
			// component: {
			// 	type: DataTypes.INTEGER(11).UNSIGNED,
			// 	allowNull: false,
			// 	// references: {
			// 	// 	model: 'component',
			// 	// 	key: 'id'
			// 	// },
			// 	field: 'component'
			// },
			attribute: {
				type: DataTypes.STRING(255),
				allowNull: false,
				field: 'attribute'
			},
			value: {
				type: DataTypes.TEXT,
				allowNull: false,
				field: 'value'
			},
			// componentId: {
			// 	type: DataTypes.INTEGER(11).UNSIGNED,
			// 	allowNull: false,
			// 	field: 'component_id'
			// }
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'component_prefs'
		}
	);

	componentPrefs.associate = function(models) {
		componentPrefs.belongsTo(models.component, {foreignKey: 'componentId', sourceKey: 'id', onDelete: 'CASCADE'})
		// componentPrefs.belongsTo(models.users, {foreignKey: 'userId', sourceKey: 'userId'})
		// componentPrefs.belongsTo(models.widgets, {foreignKey: 'widgetId', sourceKey: 'widgetId'})
	}

	return componentPrefs;
};
