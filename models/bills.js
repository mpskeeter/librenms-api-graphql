/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	const bills = sequelize.define('bills',
		{
			billId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'bill_id'
			},
			billName: {
				type: DataTypes.TEXT,
				allowNull: false,
				field: 'bill_name'
			},
			billType: {
				type: DataTypes.TEXT,
				allowNull: false,
				field: 'bill_type'
			},
			billCdr: {
				type: DataTypes.BIGINT,
				allowNull: true,
				field: 'bill_cdr'
			},
			billDay: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				defaultValue: '1',
				field: 'bill_day'
			},
			billQuota: {
				type: DataTypes.BIGINT,
				allowNull: true,
				field: 'bill_quota'
			},
			rate95ThIn: {
				type: DataTypes.BIGINT,
				allowNull: false,
				field: 'rate_95th_in'
			},
			rate95ThOut: {
				type: DataTypes.BIGINT,
				allowNull: false,
				field: 'rate_95th_out'
			},
			rate95Th: {
				type: DataTypes.BIGINT,
				allowNull: false,
				field: 'rate_95th'
			},
			dir95Th: {
				type: DataTypes.STRING(3),
				allowNull: false,
				field: 'dir_95th'
			},
			totalData: {
				type: DataTypes.BIGINT,
				allowNull: false,
				field: 'total_data'
			},
			totalDataIn: {
				type: DataTypes.BIGINT,
				allowNull: false,
				field: 'total_data_in'
			},
			totalDataOut: {
				type: DataTypes.BIGINT,
				allowNull: false,
				field: 'total_data_out'
			},
			rateAverageIn: {
				type: DataTypes.BIGINT,
				allowNull: false,
				field: 'rate_average_in'
			},
			rateAverageOut: {
				type: DataTypes.BIGINT,
				allowNull: false,
				field: 'rate_average_out'
			},
			rateAverage: {
				type: DataTypes.BIGINT,
				allowNull: false,
				field: 'rate_average'
			},
			billLastCalc: {
				type: DataTypes.DATE,
				allowNull: false,
				field: 'bill_last_calc'
			},
			billCustid: {
				type: DataTypes.STRING(64),
				allowNull: false,
				field: 'bill_custid'
			},
			billRef: {
				type: DataTypes.STRING(64),
				allowNull: false,
				field: 'bill_ref'
			},
			billNotes: {
				type: DataTypes.STRING(256),
				allowNull: false,
				field: 'bill_notes'
			},
			billAutoadded: {
				type: DataTypes.INTEGER(1),
				allowNull: false,
				field: 'bill_autoadded'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'bills'
		}
	);

	bills.associate = function(models) {
		let stdAssociation = {foreignKey: 'billId', targetKey: 'billId'};
		bills.hasMany(models.billData,         stdAssociation);
		bills.hasMany(models.billHistory,      stdAssociation);
		bills.hasMany(models.billPerms,        stdAssociation);
		bills.hasMany(models.billPortCounters, stdAssociation);
		bills.hasMany(models.billPorts,        stdAssociation);
		// bills.belongsTo(models.devices, {foreignKey: 'deviceId', targetKey: 'deviceId'});
	}

	return bills;
};
