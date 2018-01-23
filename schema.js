export default `
  type Query {
    devices: [Device!]!
    device(deviceId: ID!): Device
    ports: [Port!]!
    port(portId: ID!): [Port]
  }

  enum AuthLevel {
    noAuthNoPriv
    authNoPriv
    authPriv
  }

  enum AuthAlgo{
    MD5
    SHA
  }

  enum CryptoAlgo {
    AES
    DES

  }

  enum YesNo {
    No
    Yes
  }

  type Alert {
    id: Int!
    deviceId: Int!
    ruleId: Int!
    state: Int!
    alerted: Int!
    open: Int!
    timestamp: Int!
  }

  type Port {
    portId: ID!
    deviceId: Int!
    port_descr_type: String
    port_descr_descr: String
    port_descr_circuit: String
    port_descr_speed: String
    port_descr_notes: String
    ifDescr: String
    ifName: String
    portName: String
    ifIndex: Int
    ifSpeed: Int
    ifConnectorPresent: String
    ifPromiscuousMode: String
    ifHighSpeed: Int
    ifOperStatus: String
    ifOperStatus_prev: String
    ifAdminStatus: String
    ifAdminStatus_prev: String
    ifDuplex: String
    ifMtu: Int
    ifType: String
    ifAlias: String
    ifPhysAddress: String
    ifHardType: String
    ifLastChange: Int!
    ifVlan: String!
    ifTrunk: String
    ifVrf: Int!
    counter_in: Int
    counter_out: Int
    ignore: Int!
    disabled: Int!
    detailed: Int!
    deleted: Int!
    pagpOperationMode: String
    pagpPortState: String
    pagpPartnerDeviceId: String
    pagpPartnerLearnMethod: String
    pagpPartnerIfIndex: Int
    pagpPartnerGroupIfIndex: Int
    pagpPartnerDeviceName: String
    pagpEthcOperationMode: String
    pagpDeviceId: String
    pagpGroupIfIndex: Int
    ifInUcastPkts: Int
    ifInUcastPkts_prev: Int
    ifInUcastPkts_delta: Int
    ifInUcastPkts_rate: Int
    ifOutUcastPkts: Int
    ifOutUcastPkts_prev: Int
    ifOutUcastPkts_delta: Int
    ifOutUcastPkts_rate: Int
    ifInErrors: Int
    ifInErrors_prev: Int
    ifInErrors_delta: Int
    ifInErrors_rate: Int
    ifOutErrors: Int
    ifOutErrors_prev: Int
    ifOutErrors_delta: Int
    ifOutErrors_rate: Int
    ifInOctets: Int
    ifInOctets_prev: Int
    ifInOctets_delta: Int
    ifInOctets_rate: Int
    ifOutOctets: Int
    ifOutOctets_prev: Int
    ifOutOctets_delta: Int
    ifOutOctets_rate: Int
    poll_time: Int
    poll_prev: Int
    poll_period: Int
  }

  type DeviceAttributes {
    attribId: Int!
    deviceId: Int!
    attribType: String!
    attribValue: String!
  }

  type DevicePermissions {
    userId: Int!
    deviceId: Int!
    accessLevel: Int!
  }

  type Route {
    deviceId: Int!
    contextName: String!
    ipRouteDest: String!
    ipRouteIfIndex: String
    ipRouteMetric: String!
    ipRouteNextHop: String!
    ipRouteType: String!
    ipRouteProto: String!
    discoveredAt: Int!
    ipRouteMask: String!
  }

  type Toner {
    tonerId: Int!
    deviceId: Int!
    tonerIndex: Int!
    tonerType: String!
    tonerOid: String!
    tonerDescr: String!
    tonerCapacity: Int!
    tonerCurrent: Int!
    tonerCapacityOid: String
  }

  type WirelessSensors {
    sensorId: Int!
    sensorDeleted: Int!
    sensorClass: String!
    deviceId: Int!
    sensorIndex: String
    sensorType: String!
    sensorDescr: String
    sensorDivisor: Int!
    sensorMultiplier: Int!
    sensorAggregator: String!
    sensorCurrent: Float
    sensorPrev: Float
    sensorLimit: Float
    sensorLimitWarn: Float
    sensorLimitLow: Float
    sensorLimitLowWarn: Float
    sensorAlert: Int!
    sensorCustom: YesNo!
    entPhysicalIndex: String
    entPhysicalIndexMeasured: String
    lastupdate: String!
    sensorOids: String!
    accessPointId: Int
  }

  type Device {
    deviceId: ID!
    hostname: String!
    sysName: String
    ip: String
    community	: String
    authlevel: AuthLevel
    authname: String
    authpass: String
    authalgo: AuthAlgo
    cryptopass: String
    cryptoalgo: CryptoAlgo
    snmpver: String
    port: Int
    transport: String
    timeout: Int
    retries: Int
    snmpDisable: Int
    bgpLocalAs: String
    sysObjectId: String
    sysDescr: String
    sysContact: String
    version: String
    hardware: String
    features: String
    location: String
    os: String
    status: Int
    statusReason: String
    ignore: Int
    disabled: Int
    uptime: Int
    agentUptime: Int
    lastPolled: String
    lastPollAttempted: String
    lastPolledTimetaken: Float
    lastDiscoveredTimetaken: Float
    lastDiscovered: String
    lastPing: String
    lastPingTimetaken: Float
    purpose: String
    type: String
    serial: String
    icon: String
    pollerGroup: Int
    overrideSysLocation: Int
    notes: String
    portAssociationMode: Int
    Ports: [Port]!
    Alerts: [Alert]!
    Attributes: [DeviceAttributes]!
    Permissions: [DevicePermissions]!
    Routes: [Route]!
    Toner: [Toner]!
    WirelessSensors: [WirelessSensors]!
  }`;
