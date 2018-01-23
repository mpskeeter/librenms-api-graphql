  type Query {
    devices: [Device!]!
    device(deviceId: ID!): Device
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

  type Device {
    deviceId: Int!
    hostname: String!
    sysName: String
    ip: String
    community	: String
    authlevel: AuthLevel!
    authname: String
    authpass: String
    authalgo: AuthAlgo!
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
    hrDevices: [hrDevice]!
    Pollers: [Pollers]!
    Ports: [Port]!
    Alerts: [Alert]!
    Attributes: [DeviceAttributes]!
    Permissions: [DevicePermissions]!
    Routes: [Route]!
    Toner: [Toner]!
    Sensors: [Sensors]!
    WirelessSensors: [WirelessSensors]!
    Applications: [Applications]!
    Processes: [Processes]!
    Packages: [Packages]!
    Storage: [Storage]!
    STP: [STP]!
  }
