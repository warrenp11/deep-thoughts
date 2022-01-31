// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
  type Thought {
    _id: ID
    thoughtText: String
    createdAt: String
    username: String
    reactionCount: Int
  }

  type Query {
      # the way we set this up will allow us to query thoughts with or without the username parameter
    thoughts(username: String): [Thought]
  }
`;

// export the typeDefs
module.exports = typeDefs;
