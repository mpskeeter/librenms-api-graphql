/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let component = sequelize.define('component',
		{
			id: {
				type: DataTypes.INTEGER(11).UNSIGNED,
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
			type: {
				type: DataTypes.STRING(50),
				allowNull: false,
				field: 'type'
			},
			label: {
				type: DataTypes.STRING(255),
				allowNull: true,
				field: 'label'
			},
			status: {
				type: DataTypes.INTEGER(1),
				allowNull: false,
				defaultValue: '0',
				field: 'status'
			},
			disabled: {
				type: DataTypes.INTEGER(1),
				allowNull: false,
				defaultValue: '0',
				field: 'disabled'
			},
			ignore: {
				type: DataTypes.INTEGER(1),
				allowNull: false,
				defaultValue: '0',
				field: 'ignore'
			},
			error: {
				type: DataTypes.STRING(255),
				allowNull: true,
				field: 'error'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'component'
		}
	);

	component.associate = function(models) {
		component.belongsTo(models.devices, {foreignKey: 'deviceId', sourceKey: 'deviceId'})
		component.hasMany(models.componentPrefs, {foreignKey: 'componentId', sourceKey: 'id'})
		component.hasMany(models.componentStatuslog, {foreignKey: 'componentId', sourceKey: 'id'})
		// component.belongsTo(models.widgets, {foreignKey: 'widgetId', sourceKey: 'widgetId'})
	}


	return component;
};
