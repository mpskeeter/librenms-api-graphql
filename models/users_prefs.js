/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let usersPrefs = sequelize.define('usersPrefs',
		{
			userId: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				allowNull: false,
				field: 'user_id'
			},
			pref: {
				type: DataTypes.STRING(32),
				allowNull: false,
				field: 'pref'
			},
			value: {
				type: DataTypes.STRING(128),
				allowNull: false,
				field: 'value'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'users_prefs'
		}
	);

	usersPrefs.associate = function(models) {
		usersPrefs.belongsTo(models.users, {foreignKey: 'userId', sourceKey: 'userId'})
	}

	return usersPrefs;
};
