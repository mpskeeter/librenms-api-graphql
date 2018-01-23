/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let packages = sequelize.define('packages',
		{
			pkgId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'pkg_id'
			},
			deviceId: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				allowNull: false,
				field: 'device_id'
			},
			name: {
				type: DataTypes.STRING(64),
				allowNull: false,
				field: 'name'
			},
			manager: {
				type: DataTypes.STRING(16),
				allowNull: false,
				defaultValue: '1',
				field: 'manager'
			},
			status: {
				type: DataTypes.INTEGER(1),
				allowNull: false,
				field: 'status'
			},
			version: {
				type: DataTypes.STRING(255),
				allowNull: false,
				field: 'version'
			},
			build: {
				type: DataTypes.STRING(64),
				allowNull: false,
				field: 'build'
			},
			arch: {
				type: DataTypes.STRING(16),
				allowNull: false,
				field: 'arch'
			},
			size: {
				type: DataTypes.BIGINT,
				allowNull: true,
				field: 'size'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'packages'
		}
	);

	packages.associate = function(models) {
    packages.belongsTo(models.devices, {foreignKey: 'deviceId', targetKey: 'deviceId', onDelete: 'CASCADE'});
  }

	return packages;
};
