/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let sensorsToStateIndexes = sequelize.define('sensorsToStateIndexes',
		{
			sensorsToStateTranslationsId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'sensors_to_state_translations_id'
			},
			sensorId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				// references: {
				// 	model: 'sensors',
				// 	key: 'sensor_id'
				// },
				field: 'sensor_id'
			},
			stateIndexId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				// references: {
				// 	model: 'state_indexes',
				// 	key: 'state_index_id'
				// },
				field: 'state_index_id'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'sensors_to_state_indexes'
		}
	);

	sensorsToStateIndexes.associate = function(models) {
		sensorsToStateIndexes.belongsTo(models.sensors, {foreignKey: 'sensorId', sourceKey: 'sensorId'})
		sensorsToStateIndexes.belongsTo(models.stateIndexes, {foreignKey: 'stateIndexId', sourceKey: 'stateIndexId'})
	}

	return sensorsToStateIndexes;
};
