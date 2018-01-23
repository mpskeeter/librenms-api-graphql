/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let slas = sequelize.define('slas',
		{
			slaId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'sla_id'
			},
			deviceId: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				allowNull: false,
				field: 'device_id'
			},
			slaNr: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'sla_nr'
			},
			owner: {
				type: DataTypes.STRING(255),
				allowNull: false,
				field: 'owner'
			},
			tag: {
				type: DataTypes.STRING(255),
				allowNull: false,
				field: 'tag'
			},
			rttType: {
				type: DataTypes.STRING(16),
				allowNull: false,
				field: 'rtt_type'
			},
			status: {
				type: DataTypes.INTEGER(1),
				allowNull: false,
				field: 'status'
			},
			opstatus: {
				type: DataTypes.INTEGER(1),
				allowNull: false,
				defaultValue: '0',
				field: 'opstatus'
			},
			deleted: {
				type: DataTypes.INTEGER(1),
				allowNull: false,
				defaultValue: '0',
				field: 'deleted'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'slas'
		}
	);

	slas.associate = function(models) {
		slas.belongsTo(models.devices, {foreignKey: 'deviceId', targetKey: 'deviceId', onDelete: 'CASCADE'});
	}

	return slas;
};
