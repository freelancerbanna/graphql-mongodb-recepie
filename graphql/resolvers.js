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
    createRecipe: async (_, { recipeInput: { name, description } }) => {
      const createRecipe = new Recipe({
        name: name,
        description: description,
        createdAt: new Date().toISOString(),
        thumbsUp: 0,
        thumbsDown: 0,
      });

      const res = await createRecipe.save();
      return {
        id: res._id,
        ...res._doc,
      };
    },
    deleteRecipe: async (_, { ID }) => {
      const wasDeleted = (await Recipe.deleteOne()).deletedCount;
      return wasDeleted;
    },
    editRecipe: async (_, { ID, recieInput: { name, descrition } }) => {
      const wasEdited = (
        await Recipe.updateOne(
          { _id: ID },
          { $set: { name: name, description: description } },
          { new: true }
        )
      ).modifiedCount;
      return wasEdited;
    },
  },
};
