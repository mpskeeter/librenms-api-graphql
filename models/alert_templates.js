/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let alertTemplates = sequelize.define('alertTemplates',
		{
			id: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'id'
			},
			ruleId: {
				type: DataTypes.STRING(255),
				allowNull: false,
				defaultValue: ',',
				field: 'rule_id'
			},
			name: {
				type: DataTypes.STRING(255),
				allowNull: false,
				field: 'name'
			},
			template: {
				type: DataTypes.TEXT,
				allowNull: false,
				field: 'template'
			},
			title: {
				type: DataTypes.STRING(255),
				allowNull: true,
				field: 'title'
			},
			titleRec: {
				type: DataTypes.STRING(255),
				allowNull: true,
				field: 'title_rec'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'alert_templates'
		}
	);

	alertTemplates.associate = function(models) {
		alertTemplates.hasMany(models.alertTemplateMap, {foreignKey: 'id', targetKey: 'alertTemplatesId'});
  }

  return alertTemplates;
};
