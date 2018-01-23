/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let pollerGroups = sequelize.define('pollerGroups',
		{
			id: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'id'
			},
			groupName: {
				type: DataTypes.STRING(255),
				allowNull: false,
				field: 'group_name'
			},
			descr: {
				type: DataTypes.STRING(255),
				allowNull: false,
				field: 'descr'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
      timestamps: false,

      // don't use camelcase for automatically added attributes but underscore style
      // so updatedAt will be updated_at
      underscored: true,

      // define the table's name
			tableName: 'poller_groups'
		}
	);

	return pollerGroups;
};
