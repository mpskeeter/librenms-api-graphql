/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let route = sequelize.define('route',
		{
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
			ipRouteDest: {
				type: DataTypes.STRING(256),
				allowNull: false,
				field: 'ipRouteDest'
			},
			ipRouteIfIndex: {
				type: DataTypes.STRING(256),
				allowNull: true,
				field: 'ipRouteIfIndex'
			},
			ipRouteMetric: {
				type: DataTypes.STRING(256),
				allowNull: false,
				field: 'ipRouteMetric'
			},
			ipRouteNextHop: {
				type: DataTypes.STRING(256),
				allowNull: false,
				field: 'ipRouteNextHop'
			},
			ipRouteType: {
				type: DataTypes.STRING(256),
				allowNull: false,
				field: 'ipRouteType'
			},
			ipRouteProto: {
				type: DataTypes.STRING(256),
				allowNull: false,
				field: 'ipRouteProto'
			},
			discoveredAt: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'discoveredAt'
			},
			ipRouteMask: {
				type: DataTypes.STRING(256),
				allowNull: false,
				field: 'ipRouteMask'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'route'
		}
	);

	route.associate = function(models) {
		route.belongsTo(models.devices, {foreignKey: 'deviceId', sourceKey: 'deviceId'})
	}

	return route;
};
