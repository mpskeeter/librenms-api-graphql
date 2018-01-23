/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let tnmsneinfo = sequelize.define('tnmsneinfo',
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
			neId: {
				type: DataTypes.INTEGER(32),
				allowNull: false,
				field: 'neID'
			},
			neType: {
				type: DataTypes.STRING(128),
				allowNull: false,
				field: 'neType'
			},
			neName: {
				type: DataTypes.STRING(128),
				allowNull: false,
				field: 'neName'
			},
			neLocation: {
				type: DataTypes.STRING(128),
				allowNull: false,
				field: 'neLocation'
			},
			neAlarm: {
				type: DataTypes.STRING(128),
				allowNull: false,
				field: 'neAlarm'
			},
			neOpMode: {
				type: DataTypes.STRING(128),
				allowNull: false,
				field: 'neOpMode'
			},
			neOpState: {
				type: DataTypes.STRING(128),
				allowNull: false,
				field: 'neOpState'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'tnmsneinfo'
		}
	);

	tnmsneinfo.associate = function(models) {
		tnmsneinfo.belongsTo(models.devices, {foreignKey: 'deviceId', targetKey: 'deviceId'});
	}

	return tnmsneinfo;
};
