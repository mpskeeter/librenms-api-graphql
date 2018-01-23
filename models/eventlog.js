/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let eventlog = sequelize.define('eventlog',
		{
			eventId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'event_id'
			},
			host: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				defaultValue: '0',
				field: 'host'
			},
			deviceId: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				allowNull: false,
				field: 'device_id'
			},
			datetime: {
				type: DataTypes.DATE,
				allowNull: false,
				defaultValue: '1970-01-02 00:00:01',
				field: 'datetime'
			},
			message: {
				type: DataTypes.TEXT,
				allowNull: true,
				field: 'message'
			},
			type: {
				type: DataTypes.STRING(64),
				allowNull: true,
				field: 'type'
			},
			reference: {
				type: DataTypes.STRING(64),
				allowNull: false,
				field: 'reference'
			},
			username: {
				type: DataTypes.STRING(128),
				allowNull: true,
				field: 'username'
			},
			severity: {
				type: DataTypes.INTEGER(1),
				allowNull: true,
				defaultValue: '2',
				field: 'severity'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'eventlog'
		}
	);

	eventlog.associate = function(models) {
		eventlog.belongsTo(models.devices, {foreignKey: 'deviceId', sourceKey: 'deviceId'});
	}

	return eventlog;
};
