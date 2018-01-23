  type BillHistory {
    billHistId: Int!
    billId: Int!
    updated: Int!
    billDatefrom: Int!
    billDateto: Int!
    billType: String!
    billAllowed: String!
    billUsed: String!
    billOveruse: String!
    billPercent: Int!
    rate95ThIn: String!
    rate95ThOut: String!
    rate95Th: String!
    dir95Th: String!
    rateAverage: String!
    rateAverageIn: String!
    rateAverageOut: String!
    trafIn: String!
    trafOut: String!
    trafTotal: String!
    pdf: String
  }
