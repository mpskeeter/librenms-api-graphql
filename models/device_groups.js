/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let deviceGroups = sequelize.define('deviceGroups',
		{
			id: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'id'
			},
			name: {
				type: DataTypes.STRING(255),
				allowNull: false,
				defaultValue: '',
				unique: true,
				field: 'name'
			},
			desc: {
				type: DataTypes.STRING(255),
				allowNull: false,
				defaultValue: '',
				field: 'desc'
			},
			pattern: {
				type: DataTypes.TEXT,
				allowNull: true,
				field: 'pattern'
			},
			params: {
				type: DataTypes.TEXT,
				allowNull: true,
				field: 'params'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
      timestamps: false,

      // don't use camelcase for automatically added attributes but underscore style
      // so updatedAt will be updated_at
      underscored: true,

      // define the table's name
			tableName: 'device_groups'
		}
	);

	deviceGroups.associate = function(models) {
		deviceGroups.hasMany(models.deviceGroupDevice, {foreignKey: 'deviceGroupId', sourceKey: 'id'});
  }

	return deviceGroups;
};
