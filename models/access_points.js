/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let accessPoints = sequelize.define('accessPoints',
		{
			accesspointId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'accesspoint_id'
			},
			deviceId: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				allowNull: false,
				field: 'device_id'
			},
			name: {
				type: DataTypes.STRING(255),
				allowNull: false,
				field: 'name'
			},
			radioNumber: {
				type: DataTypes.INTEGER(4),
				allowNull: true,
				field: 'radio_number'
			},
			type: {
				type: DataTypes.STRING(16),
				allowNull: false,
				field: 'type'
			},
			macAddr: {
				type: DataTypes.STRING(24),
				allowNull: false,
				field: 'mac_addr'
			},
			deleted: {
				type: DataTypes.INTEGER(1),
				allowNull: false,
				defaultValue: '0',
				field: 'deleted'
			},
			channel: {
				type: DataTypes.INTEGER(4).UNSIGNED,
				allowNull: false,
				defaultValue: '0',
				field: 'channel'
			},
			txpow: {
				type: DataTypes.INTEGER(4),
				allowNull: false,
				defaultValue: '0',
				field: 'txpow'
			},
			radioutil: {
				type: DataTypes.INTEGER(4),
				allowNull: false,
				defaultValue: '0',
				field: 'radioutil'
			},
			numasoclients: {
				type: DataTypes.INTEGER(6),
				allowNull: false,
				defaultValue: '0',
				field: 'numasoclients'
			},
			nummonclients: {
				type: DataTypes.INTEGER(6),
				allowNull: false,
				defaultValue: '0',
				field: 'nummonclients'
			},
			numactbssid: {
				type: DataTypes.INTEGER(4),
				allowNull: false,
				defaultValue: '0',
				field: 'numactbssid'
			},
			nummonbssid: {
				type: DataTypes.INTEGER(4),
				allowNull: false,
				defaultValue: '0',
				field: 'nummonbssid'
			},
			interference: {
				type: DataTypes.INTEGER(3).UNSIGNED,
				allowNull: false,
				field: 'interference'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
      timestamps: false,

      // don't use camelcase for automatically added attributes but underscore style
      // so updatedAt will be updated_at
      underscored: true,

      // define the table's name
			tableName: 'access_points'
		}
	);

	accessPoints.associate = function(models) {
    accessPoints.belongsTo(models.devices, {foreignKey: 'deviceId', targetKey: 'deviceId'});
  }

  return accessPoints;
};
