/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let perfTimes = sequelize.define('perfTimes',
		{
			id: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'id'
			},
			type: {
				type: DataTypes.STRING(8),
				allowNull: false,
				field: 'type'
			},
			doing: {
				type: DataTypes.STRING(64),
				allowNull: false,
				field: 'doing'
			},
			start: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'start'
			},
			duration: {
				type: "DOUBLE(8,2)",
				allowNull: false,
				field: 'duration'
			},
			devices: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'devices'
			},
			poller: {
				type: DataTypes.STRING(255),
				allowNull: false,
				field: 'poller'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
      timestamps: false,

      // don't use camelcase for automatically added attributes but underscore style
      // so updatedAt will be updated_at
      underscored: true,

      // define the table's name
			tableName: 'perf_times'
		}
	);

	return perfTimes;
};
