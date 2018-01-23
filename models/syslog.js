/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let syslog = sequelize.define('syslog',
		{
			deviceId: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				allowNull: true,
				field: 'device_id'
			},
			facility: {
				type: DataTypes.STRING(10),
				allowNull: true,
				field: 'facility'
			},
			priority: {
				type: DataTypes.STRING(10),
				allowNull: true,
				field: 'priority'
			},
			level: {
				type: DataTypes.STRING(10),
				allowNull: true,
				field: 'level'
			},
			tag: {
				type: DataTypes.STRING(10),
				allowNull: true,
				field: 'tag'
			},
			timestamp: {
				type: DataTypes.DATE,
				allowNull: false,
				defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
				field: 'timestamp'
			},
			program: {
				type: DataTypes.STRING(32),
				allowNull: true,
				field: 'program'
			},
			msg: {
				type: DataTypes.TEXT,
				allowNull: true,
				field: 'msg'
			},
			seq: {
				type: DataTypes.BIGINT,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'seq'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
		tableName: 'syslog'
		}
	);

	syslog.associate = function(models) {
    syslog.belongsTo(models.devices, {foreignKey: 'deviceId', targetKey: 'deviceId', onDelete: 'CASCADE'});
  }

	return syslog;
};
