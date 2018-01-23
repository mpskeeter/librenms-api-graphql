type Applications {
  appId: Int!
  deviceId: Int!
  appType: String!
  appState: String!
  discovered: Int!
  appStatePrev: String
  appStatus: String!
  timestamp: Int!
  appInstance: String!
  Metrics: [ApplicationMetrics]!
}
