/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	const billData = sequelize.define('billData',
		{
			billId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				field: 'bill_id'
			},
			timestamp: {
				type: DataTypes.DATE,
				allowNull: false,
				primaryKey: true,
				field: 'timestamp'
			},
			period: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'period'
			},
			delta: {
				type: DataTypes.BIGINT,
				allowNull: false,
				field: 'delta'
			},
			inDelta: {
				type: DataTypes.BIGINT,
				allowNull: false,
				field: 'in_delta'
			},
			outDelta: {
				type: DataTypes.BIGINT,
				allowNull: false,
				field: 'out_delta'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'bill_data'
		}
	);

	billData.associate = function(models) {
		billData.belongsTo(models.bills, {foreignKey: 'billId', targetKey: 'billId', onDelete: 'CASCADE'});
	}

	return billData;
};
