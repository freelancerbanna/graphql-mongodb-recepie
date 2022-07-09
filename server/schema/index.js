import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    greet: string
  }
`;
const resolvers = {
  Query: {
    greet: () => "Hello World",
  },
};

export { resolvers, typeDefs };
