/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let loadbalancerVservers = sequelize.define('loadbalancerVservers',
		{
			classmapId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'classmap_id'
			},
			classmap: {
				type: DataTypes.STRING(128),
				allowNull: false,
				field: 'classmap'
			},
			serverstate: {
				type: DataTypes.STRING(64),
				allowNull: false,
				field: 'serverstate'
			},
			deviceId: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				allowNull: false,
				field: 'device_id'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'loadbalancer_vservers'
		}
	);

	loadbalancerVservers.associate = function(models) {
		loadbalancerVservers.belongsTo(models.devices, {foreignKey: 'deviceId', sourceKey: 'deviceId', onDelete: 'CASCADE'});
	}

	return loadbalancerVservers;
};
