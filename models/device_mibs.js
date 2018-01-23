/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let deviceMibs = sequelize.define('deviceMibs',
		{
			deviceId: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				allowNull: false,
				primaryKey: true,
				field: 'device_id'
			},
			module: {
				type: DataTypes.STRING(255),
				allowNull: false,
				primaryKey: true,
				field: 'module'
			},
			mib: {
				type: DataTypes.STRING(255),
				allowNull: false,
				primaryKey: true,
				field: 'mib'
			},
			includedBy: {
				type: DataTypes.STRING(255),
				allowNull: false,
				field: 'included_by'
			},
			lastModified: {
				type: DataTypes.DATE,
				allowNull: false,
				defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
				field: 'last_modified'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'device_mibs'
		}
	);

	deviceMibs.associate = function(models) {
		deviceMibs.belongsTo(models.devices, {foreignKey: 'deviceId', sourceKey: 'deviceId'});
	}

	return deviceMibs;
};
