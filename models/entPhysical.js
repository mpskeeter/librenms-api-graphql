/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let entPhysical = sequelize.define('entPhysical',
		{
			entPhysicalId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'entPhysical_id'
			},
			deviceId: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				allowNull: false,
				field: 'device_id'
			},
			entPhysicalIndex: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'entPhysicalIndex'
			},
			entPhysicalDescr: {
				type: DataTypes.TEXT,
				allowNull: false,
				field: 'entPhysicalDescr'
			},
			entPhysicalClass: {
				type: DataTypes.TEXT,
				allowNull: false,
				field: 'entPhysicalClass'
			},
			entPhysicalName: {
				type: DataTypes.TEXT,
				allowNull: false,
				field: 'entPhysicalName'
			},
			entPhysicalHardwareRev: {
				type: DataTypes.STRING(64),
				allowNull: true,
				field: 'entPhysicalHardwareRev'
			},
			entPhysicalFirmwareRev: {
				type: DataTypes.STRING(64),
				allowNull: true,
				field: 'entPhysicalFirmwareRev'
			},
			entPhysicalSoftwareRev: {
				type: DataTypes.STRING(64),
				allowNull: true,
				field: 'entPhysicalSoftwareRev'
			},
			entPhysicalAlias: {
				type: DataTypes.STRING(32),
				allowNull: true,
				field: 'entPhysicalAlias'
			},
			entPhysicalAssetId: {
				type: DataTypes.STRING(32),
				allowNull: true,
				field: 'entPhysicalAssetID'
			},
			entPhysicalIsFru: {
				type: DataTypes.STRING(8),
				allowNull: true,
				field: 'entPhysicalIsFRU'
			},
			entPhysicalModelName: {
				type: DataTypes.TEXT,
				allowNull: false,
				field: 'entPhysicalModelName'
			},
			entPhysicalVendorType: {
				type: DataTypes.TEXT,
				allowNull: true,
				field: 'entPhysicalVendorType'
			},
			entPhysicalSerialNum: {
				type: DataTypes.TEXT,
				allowNull: false,
				field: 'entPhysicalSerialNum'
			},
			entPhysicalContainedIn: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'entPhysicalContainedIn'
			},
			entPhysicalParentRelPos: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'entPhysicalParentRelPos'
			},
			entPhysicalMfgName: {
				type: DataTypes.TEXT,
				allowNull: false,
				field: 'entPhysicalMfgName'
			},
			ifIndex: {
				type: DataTypes.INTEGER(11),
				allowNull: true,
				field: 'ifIndex'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'entPhysical'
		}
	);

	entPhysical.associate = function(models) {
		entPhysical.belongsTo(models.devices, {foreignKey: 'deviceId', sourceKey: 'deviceId'});
		entPhysical.hasMany(models.entityState, {foreignKey: 'entPhysicalId', sourceKey: 'entPhysicalId'})
	}

	return entPhysical;
};
