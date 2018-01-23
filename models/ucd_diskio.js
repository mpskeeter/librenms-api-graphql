/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let ucdDiskio = sequelize.define('ucdDiskio',
		{
			diskioId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'diskio_id'
			},
			deviceId: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				allowNull: false,
				field: 'device_id'
			},
			diskioIndex: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'diskio_index'
			},
			diskioDescr: {
				type: DataTypes.STRING(32),
				allowNull: false,
				field: 'diskio_descr'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'ucd_diskio'
		}
	);

	ucdDiskio.associate = function(models) {
    ucdDiskio.belongsTo(models.devices, {foreignKey: 'deviceId', targetKey: 'deviceId'});
  }

	return ucdDiskio;
};
