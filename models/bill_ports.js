/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	const billPorts = sequelize.define('billPorts',
		{
			billId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'bill_id'
			},
			portId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'port_id'
			},
			billPortAutoadded: {
				type: DataTypes.INTEGER(1),
				allowNull: false,
				defaultValue: '0',
				field: 'bill_port_autoadded'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'bill_ports'
		}
	);

	billPorts.associate = function(models) {
		billPorts.belongsTo(models.bills, {foreignKey: 'billId', targetKey: 'billId'});
		billPorts.belongsTo(models.ports, {foreignKey: 'portId', targetKey: 'portId'});
	}

	return billPorts;
};
