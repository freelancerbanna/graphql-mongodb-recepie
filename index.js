require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server-express");

const { DB, PORT } = process.env;

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

async function startApolloServer() {
  const app = express();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await server.start();

  server.applyMiddleware({ app });

  await new Promise((resolve) => app.listen({ port: PORT }, resolve));
  console.log(`🚀 Server ready at ${PORT}${server.graphqlPath}`);
  return { server, app };
}
mongoose
  .connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to Mongodb");
    startApolloServer();
  });
