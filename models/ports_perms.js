/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let portsPerms = sequelize.define('portsPerms',
		{
			userId: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				allowNull: false,
				field: 'user_id'
			},
			portId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'port_id'
			},
			accessLevel: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'access_level'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'ports_perms'
		}
	);

	portsPerms.associate = function(models) {
		portsPerms.belongsTo(models.users, {foreignKey: 'userId', targetKey: 'userId'});
		portsPerms.belongsTo(models.ports, {foreignKey: 'portId', targetKey: 'portId'});
	}

	return portsPerms;
};
