/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let authlog = sequelize.define('authlog',
		{
			id: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'id'
			},
			datetime: {
				type: DataTypes.DATE,
				allowNull: false,
				defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
				field: 'datetime'
			},
			user: {
				type: DataTypes.TEXT,
				allowNull: false,
				field: 'user'
			},
			address: {
				type: DataTypes.TEXT,
				allowNull: false,
				field: 'address'
			},
			result: {
				type: DataTypes.TEXT,
				allowNull: false,
				field: 'result'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'authlog'
		}
	);

	authlog.associate = function(models) {
		
	}

	return authlog;
};
