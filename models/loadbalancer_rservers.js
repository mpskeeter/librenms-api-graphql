/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let loadbalancerRservers = sequelize.define('loadbalancerRservers',
		{
			rserverId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'rserver_id'
			},
			farmId: {
				type: DataTypes.STRING(128),
				allowNull: false,
				field: 'farm_id'
			},
			deviceId: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				allowNull: false,
				field: 'device_id'
			},
			stateDescr: {
				type: DataTypes.STRING(64),
				allowNull: false,
				field: 'StateDescr'
			}
		},
		{
			tableName: 'loadbalancer_rservers'
		}
	);

	loadbalancerRservers.associate = function(models) {
		loadbalancerRservers.belongsTo(models.devices, {foreignKey: 'deviceId', sourceKey: 'deviceId', onDelete: 'CASCADE'});
	}

	return loadbalancerRservers;
};
