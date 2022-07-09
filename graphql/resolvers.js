const Recipe = require("../models/recipe");

module.exports = {
  Query: {
    recipe: async (_, { ID }) => {
      return await Recipe.findById(ID);
    },
    // async recipe(_, { ID }) {
    //   return await Recipe.findById(ID);
    // },
    getRecipe: async (_, { amount }) => {
      return await Recipe.find().sort({ createdAt: -1 }).limit(amount);
    },
  },
  Mutation: {
    // createRecipe:async()
  },
};
