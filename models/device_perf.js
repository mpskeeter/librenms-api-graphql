/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let devicePerf = sequelize.define('devicePerf',
		{
			id: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'id'
			},
			deviceId: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				allowNull: false,
				field: 'device_id'
			},
			timestamp: {
				type: DataTypes.DATE,
				allowNull: false,
				field: 'timestamp'
			},
			xmt: {
				type: DataTypes.FLOAT,
				allowNull: false,
				field: 'xmt'
			},
			rcv: {
				type: DataTypes.FLOAT,
				allowNull: false,
				field: 'rcv'
			},
			loss: {
				type: DataTypes.FLOAT,
				allowNull: false,
				field: 'loss'
			},
			min: {
				type: DataTypes.FLOAT,
				allowNull: false,
				field: 'min'
			},
			max: {
				type: DataTypes.FLOAT,
				allowNull: false,
				field: 'max'
			},
			avg: {
				type: DataTypes.FLOAT,
				allowNull: false,
				field: 'avg'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
      timestamps: false,

      // don't use camelcase for automatically added attributes but underscore style
      // so updatedAt will be updated_at
      underscored: true,

      // define the table's name
			tableName: 'device_perf'
		}
	);

	devicePerf.associate = function(models) {
    devicePerf.belongsTo(models.devices, {foreignKey: 'deviceId', sourceKey: 'deviceId'});
	};

	return devicePerf;
};
