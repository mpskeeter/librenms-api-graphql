/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let stateTranslations = sequelize.define('stateTranslations',
		{
			stateTranslationId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'state_translation_id'
			},
			stateIndexId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'state_index_id'
			},
			stateDescr: {
				type: DataTypes.STRING(255),
				allowNull: false,
				field: 'state_descr'
			},
			stateDrawGraph: {
				type: DataTypes.INTEGER(1),
				allowNull: false,
				field: 'state_draw_graph'
			},
			stateValue: {
				type: DataTypes.INTEGER(5),
				allowNull: false,
				defaultValue: '0',
				field: 'state_value'
			},
			stateGenericValue: {
				type: DataTypes.INTEGER(1),
				allowNull: false,
				field: 'state_generic_value'
			},
			stateLastupdated: {
				type: DataTypes.DATE,
				allowNull: false,
				defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
				field: 'state_lastupdated'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'state_translations'
		}
	);

	stateTranslations.associate = function(models) {
		stateTranslations.belongsTo(models.stateIndexes, {foreignKey: 'stateIndexId', targetKey: 'stateIndexId', onDelete: 'CASCADE'});
	}

	return stateTranslations;
};
