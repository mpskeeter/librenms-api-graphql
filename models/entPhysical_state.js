/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let entPhysicalState = sequelize.define('entPhysicalState',
		{
			deviceId: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				allowNull: false,
				field: 'device_id'
			},
			entPhysicalIndex: {
				type: DataTypes.STRING(64),
				allowNull: false,
				field: 'entPhysicalIndex'
			},
			subindex: {
				type: DataTypes.STRING(64),
				allowNull: true,
				field: 'subindex'
			},
			group: {
				type: DataTypes.STRING(64),
				allowNull: false,
				field: 'group'
			},
			key: {
				type: DataTypes.STRING(64),
				allowNull: false,
				field: 'key'
			},
			value: {
				type: DataTypes.STRING(255),
				allowNull: false,
				field: 'value'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'entPhysical_state'
		}
	);

	entPhysicalState.associate = function(models) {
		entPhysicalState.belongsTo(models.devices, {foreignKey: 'deviceId', sourceKey: 'deviceId', onDelete: 'CASCADE'})
	}

	return entPhysicalState;

};
