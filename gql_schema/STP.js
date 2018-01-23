type STP {
  stpId: Int!
  deviceId: Int!
  rootBridge: Int!
  bridgeAddress: String!
  protocolSpecification: String!
  priority: Int!
  timeSinceTopologyChange: Int!
  topChanges: Int!
  designatedRoot: String!
  rootCost: Int!
  rootPort: Int!
  maxAge: Int!
  helloTime: Int!
  holdTime: Int!
  forwardDelay: Int!
  bridgeMaxAge: Int!
  bridgeHelloTime: Int!
  bridgeForwardDelay: Int!
}
