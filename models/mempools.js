/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let mempools = sequelize.define('mempools',
		{
			mempoolId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'mempool_id'
			},
			mempoolIndex: {
				type: DataTypes.STRING(16),
				allowNull: false,
				field: 'mempool_index'
			},
			entPhysicalIndex: {
				type: DataTypes.INTEGER(11),
				allowNull: true,
				field: 'entPhysicalIndex'
			},
			hrDeviceIndex: {
				type: DataTypes.INTEGER(11),
				allowNull: true,
				field: 'hrDeviceIndex'
			},
			mempoolType: {
				type: DataTypes.STRING(32),
				allowNull: false,
				field: 'mempool_type'
			},
			mempoolPrecision: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				defaultValue: '1',
				field: 'mempool_precision'
			},
			mempoolDescr: {
				type: DataTypes.STRING(64),
				allowNull: false,
				field: 'mempool_descr'
			},
			deviceId: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				allowNull: false,
				field: 'device_id'
			},
			mempoolPerc: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'mempool_perc'
			},
			mempoolUsed: {
				type: DataTypes.BIGINT,
				allowNull: false,
				field: 'mempool_used'
			},
			mempoolFree: {
				type: DataTypes.BIGINT,
				allowNull: false,
				field: 'mempool_free'
			},
			mempoolTotal: {
				type: DataTypes.BIGINT,
				allowNull: false,
				field: 'mempool_total'
			},
			mempoolLargestfree: {
				type: DataTypes.BIGINT,
				allowNull: true,
				field: 'mempool_largestfree'
			},
			mempoolLowestfree: {
				type: DataTypes.BIGINT,
				allowNull: true,
				field: 'mempool_lowestfree'
			},
			mempoolDeleted: {
				type: DataTypes.INTEGER(1),
				allowNull: false,
				defaultValue: '0',
				field: 'mempool_deleted'
			},
			mempoolPercWarn: {
				type: DataTypes.INTEGER(11),
				allowNull: true,
				defaultValue: '75',
				field: 'mempool_perc_warn'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'mempools'
		}
	);

	mempools.associate = function(models) {
		mempools.belongsTo(models.devices, {foreignKey: 'deviceId', sourceKey: 'deviceId', onDelete: 'CASCADE'});
		// mempools.belongsTo(models.hrDevice, {foreignKey: 'hrDeviceId', sourceKey: 'hrDeviceId', onDelete: 'CASCADE'});
	}

	return mempools;
};
