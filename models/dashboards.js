/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let dashboards = sequelize.define('dashboards',
		{
			dashboardId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'dashboard_id'
			},
			userId: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				allowNull: false,
				defaultValue: '0',
				field: 'user_id'
			},
			dashboardName: {
				type: DataTypes.STRING(255),
				allowNull: false,
				field: 'dashboard_name'
			},
			access: {
				type: DataTypes.INTEGER(1),
				allowNull: false,
				defaultValue: '0',
				field: 'access'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
      timestamps: false,

      // don't use camelcase for automatically added attributes but underscore style
      // so updatedAt will be updated_at
      underscored: true,

      // define the table's name
			tableName: 'dashboards'
		}
	);

	dashboards.associate = function(models) {
		dashboards.hasMany(models.usersWidgets, {foreignKey: 'dashboardId', sourceKey: 'dashboardId'})
    dashboards.belongsTo(models.users, {foreignKey: 'userId', sourceKey: 'userId'});
	};

	return dashboards;
};
