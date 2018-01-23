/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let stateIndexes = sequelize.define('stateIndexes',
		{
			stateIndexId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'state_index_id'
			},
			stateName: {
				type: DataTypes.STRING(64),
				allowNull: false,
				unique: true,
				field: 'state_name'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'state_indexes'
		}
	);

	stateIndexes.associate = function(models) {
		let stdAssociation = {foreignKey: 'stateIndexId', sourceKey: 'stateIndexId'};
		
		stateIndexes.hasMany(models.sensorsToStateIndexes, stdAssociation);
		stateIndexes.hasMany(models.stateTranslations,     stdAssociation);
	}

	return stateIndexes;
};
