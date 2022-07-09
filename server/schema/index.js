const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    greet: String
  }
`;
const resolvers = {
  Query: {
    greet: () => "Hello World",
  },
};

module.exports = { resolvers, typeDefs };
