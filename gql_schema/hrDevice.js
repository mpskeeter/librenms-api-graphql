  type hrDevice {
    hrDeviceId: Int!
    deviceId: Int!
    hrDeviceIndex: Int!
    hrDeviceDescr: String!
    hrDeviceType: String!
    hrDeviceErrors: Int!
    hrDeviceStatus: String!
    hrProcessorLoad: Int
    Processors: [Processors]!
  }
