type Sensors {
  sensorId: Int!
  sensorDeleted: Int!
  sensorClass: String!
  deviceId: Int!
  pollerType: String!
  sensorOid: String!
  sensorIndex: String
  sensorType: String!
  sensorDescr: String
  sensorDivisor: Int!
  sensorMultiplier: Int!
  sensorCurrent: Float
  sensorLimit: Float
  sensorLimitWarn: Float
  sensorLimitLow: Float
  sensorLimitLowWarn: Float
  sensorAlert: Int!
  sensorCustom: YesNo!
  entPhysicalIndex: String
  entPhysicalIndexMeasured: String
  lastupdate: Int!
  sensorPrev: Float
  userFunc: String
}
