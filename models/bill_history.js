/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	const billHistory = sequelize.define('billHistory',
		{
			billHistId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'bill_hist_id'
			},
			billId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'bill_id'
			},
			updated: {
				type: DataTypes.DATE,
				allowNull: false,
				defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
				field: 'updated'
			},
			billDatefrom: {
				type: DataTypes.DATE,
				allowNull: false,
				field: 'bill_datefrom'
			},
			billDateto: {
				type: DataTypes.DATE,
				allowNull: false,
				field: 'bill_dateto'
			},
			billType: {
				type: DataTypes.TEXT,
				allowNull: false,
				field: 'bill_type'
			},
			billAllowed: {
				type: DataTypes.BIGINT,
				allowNull: false,
				field: 'bill_allowed'
			},
			billUsed: {
				type: DataTypes.BIGINT,
				allowNull: false,
				field: 'bill_used'
			},
			billOveruse: {
				type: DataTypes.BIGINT,
				allowNull: false,
				field: 'bill_overuse'
			},
			billPercent: {
				type: DataTypes.DECIMAL,
				allowNull: false,
				field: 'bill_percent'
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
			rateAverage: {
				type: DataTypes.BIGINT,
				allowNull: false,
				field: 'rate_average'
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
			trafIn: {
				type: DataTypes.BIGINT,
				allowNull: false,
				field: 'traf_in'
			},
			trafOut: {
				type: DataTypes.BIGINT,
				allowNull: false,
				field: 'traf_out'
			},
			trafTotal: {
				type: DataTypes.BIGINT,
				allowNull: false,
				field: 'traf_total'
			},
			pdf: {
				type: "LONGBLOB",
				allowNull: true,
				field: 'pdf'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
      timestamps: false,

      // don't use camelcase for automatically added attributes but underscore style
      // so updatedAt will be updated_at
      underscored: true,

      // define the table's name
			tableName: 'bill_history'
		}
	);

	billHistory.associate = function(models) {
		billHistory.belongsTo(models.bills, {foreignKey: 'billId', targetKey: 'billId', onDelete: 'CASCADE'});
	}

	return billHistory;
};
