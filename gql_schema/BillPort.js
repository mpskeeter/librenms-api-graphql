  type BillPort {
    billId: Int!
    portId: Int!
    timestamp: Int!
		inCounter: String
		inDelta: String
		outCounter: String
		outDelta: String!
    Port: [Port]!
  }
