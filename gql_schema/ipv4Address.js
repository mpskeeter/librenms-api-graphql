  type ipv4Address {
    ipv4AddressId: Int!
    ipv4Address: String!
    ipv4Prefixlen: Int!
    ipv4NetworkId: ipv4Network!
    portId: Port!
    contextName: String
  }
