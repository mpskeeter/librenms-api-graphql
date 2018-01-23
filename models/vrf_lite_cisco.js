/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let vrfLiteCisco = sequelize.define('vrfLiteCisco',
		{
			vrfLiteCiscoId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'vrf_lite_cisco_id'
			},
			deviceId: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				allowNull: false,
				field: 'device_id'
			},
			contextName: {
				type: DataTypes.STRING(128),
				allowNull: false,
				field: 'context_name'
			},
			intanceName: {
				type: DataTypes.STRING(128),
				allowNull: true,
				defaultValue: '',
				field: 'intance_name'
			},
			vrfName: {
				type: DataTypes.STRING(128),
				allowNull: true,
				defaultValue: 'Default',
				field: 'vrf_name'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'vrf_lite_cisco'
		}
	);

	vrfLiteCisco.associate = function(models) {
		vrfLiteCisco.belongsTo(models.devices, {foreignKey: 'deviceId', sourceKey: 'deviceId'})
	}

	return vrfLiteCisco;
};
