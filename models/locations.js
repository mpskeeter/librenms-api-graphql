/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let locations = sequelize.define('locations',
		{
			id: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'id'
			},
			location: {
				type: DataTypes.TEXT,
				allowNull: false,
				field: 'location'
			},
			lat: {
				type: DataTypes.FLOAT,
				allowNull: false,
				field: 'lat'
			},
			lng: {
				type: DataTypes.FLOAT,
				allowNull: false,
				field: 'lng'
			},
			timestamp: {
				type: DataTypes.DATE,
				allowNull: false,
				field: 'timestamp'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
		  timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
		  // so updatedAt will be updated_at
		  underscored: true,

			// define the table's name
			tableName: 'locations'
		}
	);

	locations.associate = function(models) {

	}

	return locations;
};
