/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let processes = sequelize.define('processes',
		{
			deviceId: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				allowNull: false,
				field: 'device_id'
			},
			pid: {
				type: DataTypes.INTEGER(255),
				allowNull: false,
				field: 'pid'
			},
			vsz: {
				type: DataTypes.INTEGER(255),
				allowNull: false,
				field: 'vsz'
			},
			rss: {
				type: DataTypes.INTEGER(255),
				allowNull: false,
				field: 'rss'
			},
			cputime: {
				type: DataTypes.STRING(12),
				allowNull: false,
				field: 'cputime'
			},
			user: {
				type: DataTypes.STRING(50),
				allowNull: false,
				field: 'user'
			},
			command: {
				type: DataTypes.TEXT,
				allowNull: false,
				field: 'command'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'processes'
		}
	);

	processes.associate = function(models) {
    processes.belongsTo(models.devices, {foreignKey: 'deviceId', targetKey: 'deviceId'});
  }

	return processes;
};
