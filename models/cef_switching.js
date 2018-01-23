/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let cefSwitching = sequelize.define('cefSwitching',
		{
			cefSwitchingId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'cef_switching_id'
			},
			deviceId: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				allowNull: false,
				field: 'device_id'
			},
			entPhysicalIndex: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'entPhysicalIndex'
			},
			afi: {
				type: DataTypes.STRING(4),
				allowNull: false,
				field: 'afi'
			},
			cefIndex: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'cef_index'
			},
			cefPath: {
				type: DataTypes.STRING(16),
				allowNull: false,
				field: 'cef_path'
			},
			drop: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'drop'
			},
			punt: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'punt'
			},
			punt2Host: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'punt2host'
			},
			dropPrev: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'drop_prev'
			},
			puntPrev: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'punt_prev'
			},
			punt2HostPrev: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'punt2host_prev'
			},
			updated: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'updated'
			},
			updatedPrev: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'updated_prev'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'cef_switching'
		}
	);

	cefSwitching.associate = function(models) {
		cefSwitching.belongsTo(models.devices, {foreignKey: 'deviceId', sourceKey: 'deviceId', onDelete: 'CASCADE'});
	}

	return cefSwitching;
};
