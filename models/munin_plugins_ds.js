/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let muninPluginsDs = sequelize.define('muninPluginsDs',
		{
			mplugId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'mplug_id'
			},
			dsName: {
				type: DataTypes.STRING(32),
				allowNull: false,
				field: 'ds_name'
			},
			dsType: {
				type: DataTypes.ENUM('COUNTER','ABSOLUTE','DERIVE','GAUGE'),
				allowNull: false,
				defaultValue: 'GAUGE',
				field: 'ds_type'
			},
			dsLabel: {
				type: DataTypes.STRING(64),
				allowNull: false,
				field: 'ds_label'
			},
			dsCdef: {
				type: DataTypes.STRING(255),
				allowNull: false,
				field: 'ds_cdef'
			},
			dsDraw: {
				type: DataTypes.STRING(64),
				allowNull: false,
				field: 'ds_draw'
			},
			dsGraph: {
				type: DataTypes.ENUM('no','yes'),
				allowNull: false,
				defaultValue: 'yes',
				field: 'ds_graph'
			},
			dsInfo: {
				type: DataTypes.STRING(255),
				allowNull: false,
				field: 'ds_info'
			},
			dsExtinfo: {
				type: DataTypes.TEXT,
				allowNull: false,
				field: 'ds_extinfo'
			},
			dsMax: {
				type: DataTypes.STRING(32),
				allowNull: false,
				field: 'ds_max'
			},
			dsMin: {
				type: DataTypes.STRING(32),
				allowNull: false,
				field: 'ds_min'
			},
			dsNegative: {
				type: DataTypes.STRING(32),
				allowNull: false,
				field: 'ds_negative'
			},
			dsWarning: {
				type: DataTypes.STRING(32),
				allowNull: false,
				field: 'ds_warning'
			},
			dsCritical: {
				type: DataTypes.STRING(32),
				allowNull: false,
				field: 'ds_critical'
			},
			dsColour: {
				type: DataTypes.STRING(32),
				allowNull: false,
				field: 'ds_colour'
			},
			dsSum: {
				type: DataTypes.TEXT,
				allowNull: false,
				field: 'ds_sum'
			},
			dsStack: {
				type: DataTypes.TEXT,
				allowNull: false,
				field: 'ds_stack'
			},
			dsLine: {
				type: DataTypes.STRING(64),
				allowNull: false,
				field: 'ds_line'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'munin_plugins_ds'
		}
	);

	muninPluginsDs.associate = function(models) {
		muninPluginsDs.belongsTo(models.muninPlugins, {foreignKey: 'mplugId', sourceKey: 'mplugId', onDelete: 'CASCADE'});
	}


	return muninPluginsDs;
};
