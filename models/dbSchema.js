/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let dbSchema = sequelize.define('dbSchema',
		{
			version: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				defaultValue: '0',
				primaryKey: true,
				field: 'version'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'dbSchema'
		}
	);

	return dbSchema;
};
