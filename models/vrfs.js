/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let vrfs = sequelize.define('vrfs',
		{
			vrfId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'vrf_id'
			},
			vrfOid: {
				type: DataTypes.STRING(256),
				allowNull: false,
				field: 'vrf_oid'
			},
			vrfName: {
				type: DataTypes.STRING(128),
				allowNull: true,
				field: 'vrf_name'
			},
			mplsVpnVrfRouteDistinguisher: {
				type: DataTypes.STRING(128),
				allowNull: true,
				field: 'mplsVpnVrfRouteDistinguisher'
			},
			mplsVpnVrfDescription: {
				type: DataTypes.TEXT,
				allowNull: false,
				field: 'mplsVpnVrfDescription'
			},
			deviceId: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				allowNull: false,
				field: 'device_id'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'vrfs'
		}
	);

	vrfs.associate = function(models) {
		vrfs.belongsTo(models.devices, {foreignKey: 'deviceId', sourceKey: 'deviceId', onDelete: 'CASCADE'});
	}

	return vrfs;
};
