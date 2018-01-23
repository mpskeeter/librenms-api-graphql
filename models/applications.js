/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let applications = sequelize.define('applications',
		{
			appId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'app_id'
			},
			deviceId: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				allowNull: false,
				field: 'device_id'
			},
			appType: {
				type: DataTypes.STRING(64),
				allowNull: false,
				field: 'app_type'
			},
			appState: {
				type: DataTypes.STRING(32),
				allowNull: false,
				defaultValue: 'UNKNOWN',
				field: 'app_state'
			},
			discovered: {
				type: DataTypes.INTEGER(4),
				allowNull: false,
				defaultValue: '0',
				field: 'discovered'
			},
			appStatePrev: {
				type: DataTypes.STRING(32),
				allowNull: true,
				field: 'app_state_prev'
			},
			appStatus: {
				type: DataTypes.STRING(8),
				allowNull: false,
				field: 'app_status'
			},
			timestamp: {
				type: DataTypes.DATE,
				allowNull: false,
				defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
				field: 'timestamp'
			},
			appInstance: {
				type: DataTypes.STRING(255),
				allowNull: false,
				field: 'app_instance'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'applications'
		}
	);

	applications.associate = function(models) {
    applications.belongsTo(models.devices, {foreignKey: 'deviceId', targetKey: 'deviceId', onDelete: 'CASCADE'});
		applications.hasMany(models.applicationMetrics, {foreignKey: 'appId', targetKey: 'appId'});
  }

	return applications;
};
