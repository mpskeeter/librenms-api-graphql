type Query {
  bills: [Bill!]!
  bill(billId: ID!): Bill
}

  type Bill {
    billId: Int!
    billName: String!
    billType: String!
    billCdr: String
    billDay: Int!
    billQuota: String
    rate95ThIn: String!
    rate95ThOut: String!
    rate95Th: String!
    dir95Th: String!
    totalData: String!
    totalDataIn: String!
    totalDataOut: String!
    rateAverageIn: String!
    rateAverageOut: String!
    rateAverage: String!
    billLastCalc: String!
    billCustid: String!
    billRef: String!
    billNotes: String!
    billAutoadded: Int!
    BillData: [BillData]!
    BillHistory: [BillHistory]!
    BillPerms: [BillPerms]!
    BillPort: [BillPort]!
  }
