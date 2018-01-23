/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let notifications = sequelize.define('notifications',
		{
			notificationsId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'notifications_id'
			},
			title: {
				type: DataTypes.STRING(255),
				allowNull: false,
				defaultValue: '',
				field: 'title'
			},
			body: {
				type: DataTypes.TEXT,
				allowNull: false,
				field: 'body'
			},
			severity: {
				type: DataTypes.INTEGER(11),
				allowNull: true,
				defaultValue: '0',
				field: 'severity'
			},
			source: {
				type: DataTypes.STRING(255),
				allowNull: false,
				defaultValue: '',
				field: 'source'
			},
			checksum: {
				type: DataTypes.STRING(128),
				allowNull: false,
				unique: true,
				field: 'checksum'
			},
			datetime: {
				type: DataTypes.DATE,
				allowNull: false,
				defaultValue: '1970-01-02 05:00:00',
				field: 'datetime'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'notifications'
		}
	);

	notifications.associate = function(models) {
		notifications.hasMany(models.notificationsAttribs, {foreignKey: 'notificationsId', sourceKey: 'notificationsId'})
	}

	return notifications;
};
