const { ApolloServer } = require("apollo-server-express");
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");

const { typeDefs, resolvers } = require("./schema");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  //   plugins: ApolloServerPluginLandingPageGraphQLPlayground,
});

server.