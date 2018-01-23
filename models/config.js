/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let config = sequelize.define('config',
		{
			configId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'config_id'
			},
			configName: {
				type: DataTypes.STRING(255),
				allowNull: false,
				unique: true,
				field: 'config_name'
			},
			configValue: {
				type: DataTypes.STRING(512),
				allowNull: false,
				field: 'config_value'
			},
			configDefault: {
				type: DataTypes.STRING(512),
				allowNull: false,
				field: 'config_default'
			},
			configDescr: {
				type: DataTypes.STRING(100),
				allowNull: false,
				field: 'config_descr'
			},
			configGroup: {
				type: DataTypes.STRING(50),
				allowNull: false,
				field: 'config_group'
			},
			configGroupOrder: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				defaultValue: '0',
				field: 'config_group_order'
			},
			configSubGroup: {
				type: DataTypes.STRING(50),
				allowNull: false,
				field: 'config_sub_group'
			},
			configSubGroupOrder: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				defaultValue: '0',
				field: 'config_sub_group_order'
			},
			configHidden: {
				type: DataTypes.ENUM('0','1'),
				allowNull: false,
				defaultValue: '0',
				field: 'config_hidden'
			},
			configDisabled: {
				type: DataTypes.ENUM('0','1'),
				allowNull: false,
				defaultValue: '0',
				field: 'config_disabled'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'config'
		}
	);

	config.associate = function(models) {
    // alertRules.belongsTo(models.devices, {foreignKey: 'deviceId', targetKey: 'deviceId'});
		// alertRules.hasMany(models.alerts, {foreignKey: 'id', targetKey: 'ruleId'});
  }

	return config;
};
