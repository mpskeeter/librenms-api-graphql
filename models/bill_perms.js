/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let billPerms = sequelize.define('billPerms',
		{
			userId: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				allowNull: false,
				field: 'user_id'
			},
			billId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
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
			tableName: 'bill_perms'
		}
	);

	billPerms.associate = function(models) {
		billPerms.belongsTo(models.users, {foreignKey: 'userId', targetKey: 'userId'});
		billPerms.belongsTo(models.bills, {foreignKey: 'billId', targetKey: 'billId'});
	}

	return billPerms;
};
