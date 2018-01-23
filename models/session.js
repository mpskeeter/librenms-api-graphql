/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let session = sequelize.define('session',
		{
			sessionId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'session_id'
			},
			sessionUsername: {
				type: DataTypes.STRING(255),
				allowNull: false,
				field: 'session_username'
			},
			sessionValue: {
				type: DataTypes.STRING(60),
				allowNull: false,
				unique: true,
				field: 'session_value'
			},
			sessionToken: {
				type: DataTypes.STRING(60),
				allowNull: false,
				field: 'session_token'
			},
			sessionAuth: {
				type: DataTypes.STRING(16),
				allowNull: false,
				field: 'session_auth'
			},
			sessionExpiry: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'session_expiry'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'session'
		}
	);

	session.associate = function(models) {
		// session.belongsTo(models.devices, {foreignKey: 'deviceId', targetKey: 'deviceId', onDelete: 'CASCADE'});
	}

	return session;
};
