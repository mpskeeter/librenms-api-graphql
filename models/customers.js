/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let customers = sequelize.define('customers',
		{
			customerId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'customer_id'
			},
			username: {
				type: DataTypes.CHAR(64),
				allowNull: false,
				unique: true,
				field: 'username'
			},
			password: {
				type: DataTypes.CHAR(32),
				allowNull: false,
				field: 'password'
			},
			string: {
				type: DataTypes.CHAR(64),
				allowNull: false,
				field: 'string'
			},
			level: {
				type: DataTypes.INTEGER(4),
				allowNull: false,
				defaultValue: '0',
				field: 'level'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'customers'
		}
	);

	customers.associate = function(models) {
		// customers.belongsTo(models.dashboards, {foreignKey: 'dashboardId', sourceKey: 'dashboardId'})
		// customers.belongsTo(models.users, {foreignKey: 'userId', sourceKey: 'userId'})
		// customers.belongsTo(models.widgets, {foreignKey: 'widgetId', sourceKey: 'widgetId'})
	}

	return customers;
};
