type User {
  userId: ID!
  username: String!
  password: String
  realname: String!
  email: String!
  descr: String!
  level: Int!
  canModifyPasswd: Int!
  createdAt: Int!
  updatedAt: Int!
  rememberToken: String
}
