require("dotenv").config();
const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server-express");

const { DB } = process.env;

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to Mongodb");
    return server.listen({ port: 4000 });
  })
  .then((res) => console.log(`Server is running on port ${res.url}`));
