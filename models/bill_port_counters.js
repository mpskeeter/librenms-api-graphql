/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	const billPortCounters = sequelize.define('billPortCounters',
		{
			portId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				field: 'port_id'
			},
			timestamp: {
				type: DataTypes.DATE,
				allowNull: false,
				defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
				field: 'timestamp'
			},
			inCounter: {
				type: DataTypes.BIGINT,
				allowNull: true,
				field: 'in_counter'
			},
			inDelta: {
				type: DataTypes.BIGINT,
				allowNull: false,
				defaultValue: '0',
				field: 'in_delta'
			},
			outCounter: {
				type: DataTypes.BIGINT,
				allowNull: true,
				field: 'out_counter'
			},
			outDelta: {
				type: DataTypes.BIGINT,
				allowNull: false,
				defaultValue: '0',
				field: 'out_delta'
			},
			billId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				field: 'bill_id'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
      timestamps: false,

      // don't use camelcase for automatically added attributes but underscore style
      // so updatedAt will be updated_at
      underscored: true,

      // define the table's name
			tableName: 'bill_port_counters'
		}
	);

	billPortCounters.associate = function(models) {
		billPortCounters.belongsTo(models.ports, {foreignKey: 'portId', targetKey: 'portId'});
		billPortCounters.belongsTo(models.bills, {foreignKey: 'billId', targetKey: 'billId'});
	}

	return billPortCounters;
};
