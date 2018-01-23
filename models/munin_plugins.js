/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let muninPlugins = sequelize.define('muninPlugins',
		{
			mplugId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'mplug_id'
			},
			deviceId: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				allowNull: false,
				field: 'device_id'
			},
			mplugType: {
				type: DataTypes.STRING(255),
				allowNull: false,
				field: 'mplug_type'
			},
			mplugInstance: {
				type: DataTypes.STRING(128),
				allowNull: true,
				field: 'mplug_instance'
			},
			mplugCategory: {
				type: DataTypes.STRING(32),
				allowNull: true,
				field: 'mplug_category'
			},
			mplugTitle: {
				type: DataTypes.STRING(128),
				allowNull: true,
				field: 'mplug_title'
			},
			mplugInfo: {
				type: DataTypes.TEXT,
				allowNull: true,
				field: 'mplug_info'
			},
			mplugVlabel: {
				type: DataTypes.STRING(128),
				allowNull: true,
				field: 'mplug_vlabel'
			},
			mplugArgs: {
				type: DataTypes.STRING(512),
				allowNull: true,
				field: 'mplug_args'
			},
			mplugTotal: {
				type: "BINARY(1)",
				allowNull: false,
				defaultValue: '0',
				field: 'mplug_total'
			},
			mplugGraph: {
				type: "BINARY(1)",
				allowNull: false,
				defaultValue: '1',
				field: 'mplug_graph'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'munin_plugins'
		}
	);

	muninPlugins.associate = function(models) {
		muninPlugins.belongsTo(models.devices, {foreignKey: 'deviceId', sourceKey: 'deviceId', onDelete: 'CASCADE'});
		muninPlugins.hasMany(models.muninPluginsDs, {foreignKey: 'mplugId', sourceKey: 'mplugId'});
	}

	return muninPlugins;
};
