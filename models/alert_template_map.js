/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let alertTemplateMap = sequelize.define('alertTemplateMap',
		{
			id: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'id'
			},
			alertTemplatesId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'alert_templates_id'
			},
			alertRuleId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'alert_rule_id'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'alert_template_map'
		}
	);

	alertTemplateMap.associate = function(models) {
    alertTemplateMap.belongsTo(models.alertRules, {foreignKey: 'alertRuleId', targetKey: 'id', onDelete: 'CASCADE'});
		alertTemplateMap.belongsTo(models.alertTemplates, {foreignKey: 'alertTemplatesId', targetKey: 'id', onDelete: 'CASCADE'});
  }

  return alertTemplateMap;
};
