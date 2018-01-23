/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let applicationMetrics = sequelize.define('applicationMetrics',
		{
			appId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'app_id'
			},
			metric: {
				type: DataTypes.STRING(32),
				allowNull: false,
				field: 'metric'
			},
			value: {
				type: DataTypes.INTEGER(11),
				allowNull: true,
				field: 'value'
			},
			valuePrev: {
				type: DataTypes.INTEGER(11),
				allowNull: true,
				field: 'value_prev'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
      timestamps: false,

      // don't use camelcase for automatically added attributes but underscore style
      // so updatedAt will be updated_at
      underscored: true,

      // define the table's name
			tableName: 'application_metrics'
		}
	);

	applicationMetrics.associate = function(models) {
    applicationMetrics.belongsTo(models.applications, {foreignKey: 'appId', targetKey: 'appId'});
  }

	return applicationMetrics;
};
