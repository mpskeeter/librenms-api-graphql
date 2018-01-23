/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let toner = sequelize.define('toner',
		{
			tonerId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'toner_id'
			},
			deviceId: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				allowNull: false,
				defaultValue: '0',
				field: 'device_id'
			},
			tonerIndex: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'toner_index'
			},
			tonerType: {
				type: DataTypes.STRING(64),
				allowNull: false,
				field: 'toner_type'
			},
			tonerOid: {
				type: DataTypes.STRING(64),
				allowNull: false,
				field: 'toner_oid'
			},
			tonerDescr: {
				type: DataTypes.STRING(32),
				allowNull: false,
				defaultValue: '',
				field: 'toner_descr'
			},
			tonerCapacity: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				defaultValue: '0',
				field: 'toner_capacity'
			},
			tonerCurrent: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				defaultValue: '0',
				field: 'toner_current'
			},
			tonerCapacityOid: {
				type: DataTypes.STRING(64),
				allowNull: true,
				field: 'toner_capacity_oid'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'toner'
		}
	);

	toner.associate = function(models) {
		toner.belongsTo(models.devices, {foreignKey: 'deviceId', sourceKey: 'deviceId', onDelete: 'CASCADE'});
	}

	return toner;
};
