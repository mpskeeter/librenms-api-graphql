  type ipv6Address {
    ipv6AddressId: Int!
    ipv6Address: String!
    ipv6Compressed: String!
    ipv6Prefixlen: Int!
    ipv6Origin: String!
    ipv6NetworkId: ipv6Network!
    portId: Port!
    contextName: String
  }
