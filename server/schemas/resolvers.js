const { User, Thought } = require("../models");

const resolvers = {
  Query: {
    // get all users
    users: async () => {
      return User.find()
        .select("-__v -password")
        .populate("friends")
        .populate("thoughts");
    },
    // get a user by username
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select("-__v -password")
        .populate("friends")
        .populate("thoughts");
    },
    // get thoughts by username
    thoughts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Thought.find(params).sort({ createdAt: -1 });
    },
    // get single thought by _id
    thought: async (parent, { _id }) => {
      return Thought.findOne({ _id });
    },
  },

  Mutation: {
    // addUser mutation
    addUser: async (parent, args) => {
      const user = await User.create(args);
    
      return user;
    },
    // login mutation
    login: async () => {

    }
  }
};

module.exports = resolvers;
