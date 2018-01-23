/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let ospfPorts = sequelize.define('ospfPorts',
		{
			deviceId: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				allowNull: false,
				field: 'device_id'
			},
			portId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'port_id'
			},
			ospfPortId: {
				type: DataTypes.STRING(32),
				allowNull: false,
				field: 'ospf_port_id'
			},
			ospfIfIpAddress: {
				type: DataTypes.STRING(32),
				allowNull: false,
				field: 'ospfIfIpAddress',
				validate: {
					isIP: true,               // checks for IPv4 (129.89.23.1) or IPv6 format
				},
			},
			ospfAddressLessIf: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				field: 'ospfAddressLessIf'
			},
			ospfIfAreaId: {
				type: DataTypes.STRING(32),
				allowNull: false,
				field: 'ospfIfAreaId'
			},
			ospfIfType: {
				type: DataTypes.STRING(32),
				allowNull: true,
				field: 'ospfIfType'
			},
			ospfIfAdminStat: {
				type: DataTypes.STRING(32),
				allowNull: true,
				field: 'ospfIfAdminStat'
			},
			ospfIfRtrPriority: {
				type: DataTypes.INTEGER(11),
				allowNull: true,
				field: 'ospfIfRtrPriority'
			},
			ospfIfTransitDelay: {
				type: DataTypes.INTEGER(11),
				allowNull: true,
				field: 'ospfIfTransitDelay'
			},
			ospfIfRetransInterval: {
				type: DataTypes.INTEGER(11),
				allowNull: true,
				field: 'ospfIfRetransInterval'
			},
			ospfIfHelloInterval: {
				type: DataTypes.INTEGER(11),
				allowNull: true,
				field: 'ospfIfHelloInterval'
			},
			ospfIfRtrDeadInterval: {
				type: DataTypes.INTEGER(11),
				allowNull: true,
				field: 'ospfIfRtrDeadInterval'
			},
			ospfIfPollInterval: {
				type: DataTypes.INTEGER(11),
				allowNull: true,
				field: 'ospfIfPollInterval'
			},
			ospfIfState: {
				type: DataTypes.STRING(32),
				allowNull: true,
				field: 'ospfIfState'
			},
			ospfIfDesignatedRouter: {
				type: DataTypes.STRING(32),
				allowNull: true,
				field: 'ospfIfDesignatedRouter'
			},
			ospfIfBackupDesignatedRouter: {
				type: DataTypes.STRING(32),
				allowNull: true,
				field: 'ospfIfBackupDesignatedRouter'
			},
			ospfIfEvents: {
				type: DataTypes.INTEGER(11),
				allowNull: true,
				field: 'ospfIfEvents'
			},
			ospfIfAuthKey: {
				type: DataTypes.STRING(128),
				allowNull: true,
				field: 'ospfIfAuthKey'
			},
			ospfIfStatus: {
				type: DataTypes.STRING(32),
				allowNull: true,
				field: 'ospfIfStatus'
			},
			ospfIfMulticastForwarding: {
				type: DataTypes.STRING(32),
				allowNull: true,
				field: 'ospfIfMulticastForwarding'
			},
			ospfIfDemand: {
				type: DataTypes.STRING(32),
				allowNull: true,
				field: 'ospfIfDemand'
			},
			ospfIfAuthType: {
				type: DataTypes.STRING(32),
				allowNull: true,
				field: 'ospfIfAuthType'
			},
			contextName: {
				type: DataTypes.STRING(128),
				allowNull: true,
				field: 'context_name'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'ospf_ports'
		}
	);

	ospfPorts.associate = function(models) {
		ospfPorts.belongsTo(models.devices, {foreignKey: 'deviceId', sourceKey: 'deviceId', onDelete: 'CASCADE'});
		ospfPorts.belongsTo(models.ports, {foreignKey: 'portId', sourceKey: 'portId', onDelete: 'CASCADE'});
	}

	return ospfPorts;
};
