  enum YesNo {
    No
    Yes
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
