/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let plugins = sequelize.define('plugins',
		{
			pluginId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'plugin_id'
			},
			pluginName: {
				type: DataTypes.STRING(60),
				allowNull: false,
				field: 'plugin_name'
			},
			pluginActive: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'plugin_active'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'plugins'
		}
	);

	plugins.associate = function(models) {
	}

	return plugins;
};
