/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let storage = sequelize.define('storage',
		{
			storageId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'storage_id'
			},
			deviceId: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				allowNull: false,
				field: 'device_id'
			},
			storageMib: {
				type: DataTypes.STRING(16),
				allowNull: false,
				field: 'storage_mib'
			},
			storageIndex: {
				type: DataTypes.STRING(64),
				allowNull: true,
				field: 'storage_index'
			},
			storageType: {
				type: DataTypes.STRING(32),
				allowNull: true,
				field: 'storage_type'
			},
			storageDescr: {
				type: DataTypes.TEXT,
				allowNull: false,
				field: 'storage_descr'
			},
			storageSize: {
				// type: DataTypes.BIGINT,
				type: DataTypes.TEXT,
				allowNull: false,
				field: 'storage_size'
			},
			storageUnits: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'storage_units'
			},
			storageUsed: {
				// type: DataTypes.BIGINT,
				type: DataTypes.TEXT,
				allowNull: false,
				defaultValue: '0',
				field: 'storage_used'
			},
			storageFree: {
				// type: DataTypes.BIGINT,
				type: DataTypes.TEXT,
				allowNull: false,
				defaultValue: '0',
				field: 'storage_free'
			},
			storagePerc: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				defaultValue: '0',
				field: 'storage_perc'
			},
			storagePercWarn: {
				type: DataTypes.INTEGER(11),
				allowNull: true,
				defaultValue: '60',
				field: 'storage_perc_warn'
			},
			storageDeleted: {
				type: DataTypes.INTEGER(1),
				allowNull: false,
				defaultValue: '0',
				field: 'storage_deleted'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'storage'
		}
	);

	storage.associate = function(models) {
    storage.belongsTo(models.devices, {foreignKey: 'deviceId', targetKey: 'deviceId'});
  }

	return storage;
};
