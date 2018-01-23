/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let pollers = sequelize.define('pollers',
		{
			id: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'id'
			},
			pollerName: {
				type: DataTypes.STRING(255),
				allowNull: false,
				field: 'poller_name'
			},
			lastPolled: {
				type: DataTypes.DATE,
				allowNull: false,
				field: 'last_polled'
			},
			devices: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				allowNull: false,
				field: 'devices'
			},
			deviceId: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				allowNull: false,
				field: 'device_id'
			},
			timeTaken: {
				type: "DOUBLE(5,2)",
				allowNull: false,
				field: 'time_taken'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
      timestamps: false,

      // don't use camelcase for automatically added attributes but underscore style
      // so updatedAt will be updated_at
      underscored: true,

      // define the table's name
			tableName: 'pollers'
		}
	);

	pollers.associate = function(models) {
		pollers.belongsTo(models.devices, {foreignKey: 'deviceId', sourceKey: 'deviceId', onDelete: 'CASCADE'});
  }

	return pollers;
};
