/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let ospfInstances = sequelize.define('ospfInstances',
		{
			deviceId: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				allowNull: false,
				unique: true,
				field: 'device_id'
			},
			ospfInstanceId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'ospf_instance_id'
			},
			ospfRouterId: {
				type: DataTypes.STRING(32),
				allowNull: false,
				field: 'ospfRouterId'
			},
			ospfAdminStat: {
				type: DataTypes.STRING(32),
				allowNull: false,
				field: 'ospfAdminStat'
			},
			ospfVersionNumber: {
				type: DataTypes.STRING(32),
				allowNull: false,
				field: 'ospfVersionNumber'
			},
			ospfAreaBdrRtrStatus: {
				type: DataTypes.STRING(32),
				allowNull: false,
				field: 'ospfAreaBdrRtrStatus'
			},
			ospfAsBdrRtrStatus: {
				type: DataTypes.STRING(32),
				allowNull: false,
				field: 'ospfASBdrRtrStatus'
			},
			ospfExternLsaCount: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'ospfExternLsaCount'
			},
			ospfExternLsaCksumSum: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'ospfExternLsaCksumSum'
			},
			ospfTosSupport: {
				type: DataTypes.STRING(32),
				allowNull: false,
				field: 'ospfTOSSupport'
			},
			ospfOriginateNewLsas: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'ospfOriginateNewLsas'
			},
			ospfRxNewLsas: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'ospfRxNewLsas'
			},
			ospfExtLsdbLimit: {
				type: DataTypes.INTEGER(11),
				allowNull: true,
				field: 'ospfExtLsdbLimit'
			},
			ospfMulticastExtensions: {
				type: DataTypes.INTEGER(11),
				allowNull: true,
				field: 'ospfMulticastExtensions'
			},
			ospfExitOverflowInterval: {
				type: DataTypes.INTEGER(11),
				allowNull: true,
				field: 'ospfExitOverflowInterval'
			},
			ospfDemandExtensions: {
				type: DataTypes.STRING(32),
				allowNull: true,
				field: 'ospfDemandExtensions'
			},
			contextName: {
				type: DataTypes.STRING(128),
				allowNull: true,
				field: 'context_name'
			}
		},
		{
			tableName: 'ospf_instances'
		}
	);

	ospfInstances.associate = function(models) {
		ospfInstances.belongsTo(models.devices, {foreignKey: 'deviceId', sourceKey: 'deviceId', onDelete: 'CASCADE'});
	}

	return ospfInstances;

};
