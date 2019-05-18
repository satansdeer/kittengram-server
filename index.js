const { ApolloServer, gql } = require("apollo-server");

const photos = [
  {
    author: "🐈 Nala",
    url: "https://cataas.com/cat/cute/says/Apollo%20is%20awesome?size=50&color=magenta",
    comments: [
      {
        author: "Coco",
        text: "Meow meow"
      },
      {
        author: "Gracie",
        text: "Meow meow meow"
      }
    ]
  },
  {
    author: "🐱 Loki",
    url: "https://cataas.com/cat/cute/says/GraphQL%20is%20awesome?size=50&color=magenta",
    comments: [
      {
        author: "Jasper",
        text: "Meow"
      },
      {
        author: "Oreo",
        text: "Meow meow"
      },
      {
        author: "Tiger",
        text: "Meow"
      }
    ]
  },
];

const typeDefs = gql`
  type Comment {
    author: String
    text: String
  }

  type Photo {
    author: String
    url: String
    comments: [Comment]
  }

  # (A "Mutation" type will be covered later on.)
  type Query {
    photos: [Photo]
  }
`;

const resolvers = {
  Query: {
    photos: () => photos
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🐱  Server ready at ${url}`);
});
