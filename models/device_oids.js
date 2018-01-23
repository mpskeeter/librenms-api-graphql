/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let deviceOids = sequelize.define('deviceOids',
		{
			deviceId: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				allowNull: false,
				primaryKey: true,
				field: 'device_id'
			},
			oid: {
				type: DataTypes.STRING(255),
				allowNull: false,
				primaryKey: true,
				field: 'oid'
			},
			module: {
				type: DataTypes.STRING(255),
				allowNull: false,
				field: 'module'
			},
			mib: {
				type: DataTypes.STRING(255),
				allowNull: false,
				field: 'mib'
			},
			objectType: {
				type: DataTypes.STRING(255),
				allowNull: false,
				field: 'object_type'
			},
			value: {
				type: DataTypes.STRING(255),
				allowNull: true,
				field: 'value'
			},
			numvalue: {
				type: DataTypes.BIGINT,
				allowNull: true,
				field: 'numvalue'
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
			tableName: 'device_oids'
		}
	);

	deviceOids.associate = function(models) {
		deviceOids.belongsTo(models.devices, {foreignKey: 'deviceId', sourceKey: 'deviceId'});
	}

	return deviceOids;
};
