/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let ports = sequelize.define('ports',
		{
			portId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'port_id'
			},
			deviceId: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				allowNull: false,
				defaultValue: '0',
				field: 'device_id'
			},
			portDescrType: {
				type: DataTypes.STRING(255),
				allowNull: true,
				field: 'port_descr_type'
			},
			portDescrDescr: {
				type: DataTypes.STRING(255),
				allowNull: true,
				field: 'port_descr_descr'
			},
			portDescrCircuit: {
				type: DataTypes.STRING(255),
				allowNull: true,
				field: 'port_descr_circuit'
			},
			portDescrSpeed: {
				type: DataTypes.STRING(32),
				allowNull: true,
				field: 'port_descr_speed'
			},
			portDescrNotes: {
				type: DataTypes.STRING(255),
				allowNull: true,
				field: 'port_descr_notes'
			},
			ifDescr: {
				type: DataTypes.STRING(255),
				allowNull: true,
				field: 'ifDescr'
			},
			ifName: {
				type: DataTypes.STRING(255),
				allowNull: true,
				field: 'ifName'
			},
			portName: {
				type: DataTypes.STRING(128),
				allowNull: true,
				field: 'portName'
			},
			ifIndex: {
				type: DataTypes.BIGINT,
				allowNull: true,
				defaultValue: '0',
				field: 'ifIndex'
			},
			ifSpeed: {
				type: DataTypes.BIGINT,
				allowNull: true,
				field: 'ifSpeed'
			},
			ifConnectorPresent: {
				type: DataTypes.STRING(12),
				allowNull: true,
				field: 'ifConnectorPresent'
			},
			ifPromiscuousMode: {
				type: DataTypes.STRING(12),
				allowNull: true,
				field: 'ifPromiscuousMode'
			},
			ifHighSpeed: {
				type: DataTypes.INTEGER(11),
				allowNull: true,
				field: 'ifHighSpeed'
			},
			ifOperStatus: {
				type: DataTypes.STRING(16),
				allowNull: true,
				field: 'ifOperStatus'
			},
			ifOperStatusPrev: {
				type: DataTypes.STRING(16),
				allowNull: true,
				field: 'ifOperStatus_prev'
			},
			ifAdminStatus: {
				type: DataTypes.STRING(16),
				allowNull: true,
				field: 'ifAdminStatus'
			},
			ifAdminStatusPrev: {
				type: DataTypes.STRING(16),
				allowNull: true,
				field: 'ifAdminStatus_prev'
			},
			ifDuplex: {
				type: DataTypes.STRING(12),
				allowNull: true,
				field: 'ifDuplex'
			},
			ifMtu: {
				type: DataTypes.INTEGER(11),
				allowNull: true,
				field: 'ifMtu'
			},
			ifType: {
				type: DataTypes.TEXT,
				allowNull: true,
				field: 'ifType'
			},
			ifAlias: {
				type: DataTypes.TEXT,
				allowNull: true,
				field: 'ifAlias'
			},
			ifPhysAddress: {
				type: DataTypes.TEXT,
				allowNull: true,
				field: 'ifPhysAddress'
			},
			ifHardType: {
				type: DataTypes.STRING(64),
				allowNull: true,
				field: 'ifHardType'
			},
			ifLastChange: {
				type: DataTypes.BIGINT,
				allowNull: false,
				defaultValue: '0',
				field: 'ifLastChange'
			},
			ifVlan: {
				type: DataTypes.STRING(8),
				allowNull: false,
				defaultValue: '',
				field: 'ifVlan'
			},
			ifTrunk: {
				type: DataTypes.STRING(16),
				allowNull: true,
				field: 'ifTrunk'
			},
			ifVrf: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				defaultValue: '0',
				field: 'ifVrf'
			},
			counterIn: {
				type: DataTypes.INTEGER(11),
				allowNull: true,
				field: 'counter_in'
			},
			counterOut: {
				type: DataTypes.INTEGER(11),
				allowNull: true,
				field: 'counter_out'
			},
			ignore: {
				type: DataTypes.INTEGER(1),
				allowNull: false,
				defaultValue: '0',
				field: 'ignore'
			},
			disabled: {
				type: DataTypes.INTEGER(1),
				allowNull: false,
				defaultValue: '0',
				field: 'disabled'
			},
			detailed: {
				type: DataTypes.INTEGER(1),
				allowNull: false,
				defaultValue: '0',
				field: 'detailed'
			},
			deleted: {
				type: DataTypes.INTEGER(1),
				allowNull: false,
				defaultValue: '0',
				field: 'deleted'
			},
			pagpOperationMode: {
				type: DataTypes.STRING(32),
				allowNull: true,
				field: 'pagpOperationMode'
			},
			pagpPortState: {
				type: DataTypes.STRING(16),
				allowNull: true,
				field: 'pagpPortState'
			},
			pagpPartnerDeviceId: {
				type: DataTypes.STRING(48),
				allowNull: true,
				field: 'pagpPartnerDeviceId'
			},
			pagpPartnerLearnMethod: {
				type: DataTypes.STRING(16),
				allowNull: true,
				field: 'pagpPartnerLearnMethod'
			},
			pagpPartnerIfIndex: {
				type: DataTypes.INTEGER(11),
				allowNull: true,
				field: 'pagpPartnerIfIndex'
			},
			pagpPartnerGroupIfIndex: {
				type: DataTypes.INTEGER(11),
				allowNull: true,
				field: 'pagpPartnerGroupIfIndex'
			},
			pagpPartnerDeviceName: {
				type: DataTypes.STRING(128),
				allowNull: true,
				field: 'pagpPartnerDeviceName'
			},
			pagpEthcOperationMode: {
				type: DataTypes.STRING(16),
				allowNull: true,
				field: 'pagpEthcOperationMode'
			},
			pagpDeviceId: {
				type: DataTypes.STRING(48),
				allowNull: true,
				field: 'pagpDeviceId'
			},
			pagpGroupIfIndex: {
				type: DataTypes.INTEGER(11),
				allowNull: true,
				field: 'pagpGroupIfIndex'
			},
			ifInUcastPkts: {
				type: DataTypes.BIGINT,
				allowNull: true,
				field: 'ifInUcastPkts'
			},
			ifInUcastPktsPrev: {
				type: DataTypes.BIGINT,
				allowNull: true,
				field: 'ifInUcastPkts_prev'
			},
			ifInUcastPktsDelta: {
				type: DataTypes.BIGINT,
				allowNull: true,
				field: 'ifInUcastPkts_delta'
			},
			ifInUcastPktsRate: {
				type: DataTypes.INTEGER(11),
				allowNull: true,
				field: 'ifInUcastPkts_rate'
			},
			ifOutUcastPkts: {
				type: DataTypes.BIGINT,
				allowNull: true,
				field: 'ifOutUcastPkts'
			},
			ifOutUcastPktsPrev: {
				type: DataTypes.BIGINT,
				allowNull: true,
				field: 'ifOutUcastPkts_prev'
			},
			ifOutUcastPktsDelta: {
				type: DataTypes.BIGINT,
				allowNull: true,
				field: 'ifOutUcastPkts_delta'
			},
			ifOutUcastPktsRate: {
				type: DataTypes.INTEGER(11),
				allowNull: true,
				field: 'ifOutUcastPkts_rate'
			},
			ifInErrors: {
				type: DataTypes.BIGINT,
				allowNull: true,
				field: 'ifInErrors'
			},
			ifInErrorsPrev: {
				type: DataTypes.BIGINT,
				allowNull: true,
				field: 'ifInErrors_prev'
			},
			ifInErrorsDelta: {
				type: DataTypes.BIGINT,
				allowNull: true,
				field: 'ifInErrors_delta'
			},
			ifInErrorsRate: {
				type: DataTypes.INTEGER(11),
				allowNull: true,
				field: 'ifInErrors_rate'
			},
			ifOutErrors: {
				type: DataTypes.BIGINT,
				allowNull: true,
				field: 'ifOutErrors'
			},
			ifOutErrorsPrev: {
				type: DataTypes.BIGINT,
				allowNull: true,
				field: 'ifOutErrors_prev'
			},
			ifOutErrorsDelta: {
				type: DataTypes.BIGINT,
				allowNull: true,
				field: 'ifOutErrors_delta'
			},
			ifOutErrorsRate: {
				type: DataTypes.INTEGER(11),
				allowNull: true,
				field: 'ifOutErrors_rate'
			},
			ifInOctets: {
				type: DataTypes.BIGINT,
				allowNull: true,
				field: 'ifInOctets'
			},
			ifInOctetsPrev: {
				type: DataTypes.BIGINT,
				allowNull: true,
				field: 'ifInOctets_prev'
			},
			ifInOctetsDelta: {
				type: DataTypes.BIGINT,
				allowNull: true,
				field: 'ifInOctets_delta'
			},
			ifInOctetsRate: {
				type: DataTypes.BIGINT,
				allowNull: true,
				field: 'ifInOctets_rate'
			},
			ifOutOctets: {
				type: DataTypes.BIGINT,
				allowNull: true,
				field: 'ifOutOctets'
			},
			ifOutOctetsPrev: {
				type: DataTypes.BIGINT,
				allowNull: true,
				field: 'ifOutOctets_prev'
			},
			ifOutOctetsDelta: {
				type: DataTypes.BIGINT,
				allowNull: true,
				field: 'ifOutOctets_delta'
			},
			ifOutOctetsRate: {
				type: DataTypes.BIGINT,
				allowNull: true,
				field: 'ifOutOctets_rate'
			},
			pollTime: {
				type: DataTypes.INTEGER(11),
				allowNull: true,
				field: 'poll_time'
			},
			pollPrev: {
				type: DataTypes.INTEGER(11),
				allowNull: true,
				field: 'poll_prev'
			},
			pollPeriod: {
				type: DataTypes.INTEGER(11),
				allowNull: true,
				field: 'poll_period'
			}
		},
		{
			// don't add the timestamp attributes (updatedAt, createdAt)
			timestamps: false,

			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// define the table's name
			tableName: 'ports'
		}
	);

	ports.associate = function(models) {

		let stdAssociation = {foreignKey: 'portId', sourceKey: 'portId'};

		ports.hasMany(models.billPorts,        stdAssociation);
		ports.hasMany(models.billPortCounters, stdAssociation);
		ports.hasMany(models.ipv4Addresses,    stdAssociation);
		ports.hasMany(models.ipv6Addresses,    stdAssociation);
		ports.hasMany(models.juniAtmVp,        stdAssociation);
		ports.hasMany(models.macAccounting,    stdAssociation);
		ports.hasMany(models.ospfNbrs,         stdAssociation);
		ports.hasMany(models.ospfPorts,        stdAssociation);
		ports.hasMany(models.portsAdsl,        stdAssociation);
		ports.hasMany(models.portsFdb,         stdAssociation);
		ports.hasMany(models.portsPerms,       stdAssociation);
		ports.hasMany(models.portsStatistics,  stdAssociation);
		ports.hasMany(models.portsStp,         stdAssociation);
		ports.hasMany(models.portsVlans,       stdAssociation);
		ports.hasMany(models.pseudowires,      stdAssociation);

		ports.belongsTo(models.devices, {foreignKey: 'deviceId', sourceKey: 'deviceId'})
	}

	return ports;
};
