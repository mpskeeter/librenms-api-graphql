/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let ciscoAsa = sequelize.define('ciscoAsa',
		{
			ciscoAsaId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'ciscoASA_id'
			},
			deviceId: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				allowNull: false,
				field: 'device_id'
			},
			oid: {
				type: DataTypes.STRING(255),
				allowNull: false,
				field: 'oid'
			},
			data: {
				type: DataTypes.BIGINT,
				allowNull: false,
				field: 'data'
			},
			highAlert: {
				type: DataTypes.BIGINT,
				allowNull: false,
				field: 'high_alert'
			},
			lowAlert: {
				type: DataTypes.BIGINT,
				allowNull: false,
				field: 'low_alert'
			},
			disabled: {
				type: DataTypes.INTEGER(4),
				allowNull: false,
				defaultValue: '0',
				field: 'disabled'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'ciscoASA'
		}
	);

	ciscoAsa.associate = function(models) {
		ciscoAsa.belongsTo(models.devices, {foreignKey: 'deviceId', sourceKey: 'deviceId', onDelete: 'CASCADE'});
	}

	return ciscoAsa;
};
