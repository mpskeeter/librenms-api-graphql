/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let ospfAreas = sequelize.define('ospfAreas',
		{
			deviceId: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				allowNull: false,
				field: 'device_id'
			},
			ospfAreaId: {
				type: DataTypes.STRING(32),
				allowNull: false,
				field: 'ospfAreaId'
			},
			ospfAuthType: {
				type: DataTypes.STRING(64),
				allowNull: false,
				field: 'ospfAuthType'
			},
			ospfImportAsExtern: {
				type: DataTypes.STRING(128),
				allowNull: false,
				field: 'ospfImportAsExtern'
			},
			ospfSpfRuns: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'ospfSpfRuns'
			},
			ospfAreaBdrRtrCount: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'ospfAreaBdrRtrCount'
			},
			ospfAsBdrRtrCount: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'ospfAsBdrRtrCount'
			},
			ospfAreaLsaCount: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'ospfAreaLsaCount'
			},
			ospfAreaLsaCksumSum: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'ospfAreaLsaCksumSum'
			},
			ospfAreaSummary: {
				type: DataTypes.STRING(64),
				allowNull: false,
				field: 'ospfAreaSummary'
			},
			ospfAreaStatus: {
				type: DataTypes.STRING(64),
				allowNull: false,
				field: 'ospfAreaStatus'
			},
			contextName: {
				type: DataTypes.STRING(128),
				allowNull: true,
				field: 'context_name'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'ospf_areas'
		}
	);

	ospfAreas.associate = function(models) {
		ospfAreas.belongsTo(models.devices, {foreignKey: 'deviceId', sourceKey: 'deviceId'});
	}

	return ospfAreas;

};
