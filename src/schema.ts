export const typeDefs = `#graphql
    type Game {
        _id: ID!
        title: String!
        platform: [String!]!
        reviews: [Reviews!]
    }
    type Reviews{
        _id: ID!
        rating: Int!
        content: String!
        game: Game!
        author: Author!
    }
    type Author{
        _id: ID!
        name: String!
        verified: Boolean!
        reviews: [Reviews!]
    }
    type Query{
        reviews: [Reviews]
        review(id: ID!): Reviews
        games: [Game]
        game(id: ID!): Game
        authors: [Author]
        author(id: ID!): Author
    }
    type Mutation {
        addGame(game: AddGameInput!): Game
        deleteGame(id: ID!): [Game],
        updateGame(id:ID!, edits: EditGameInput!): Game
        addAuthor(author: AddAuthorInput): Author
        deleteAuthor(id: ID!): [Author]
        updateAutor(id: ID!, edits: EditAuthorInput): Author
    }

    input AddGameInput {
        title: String!,
        platform: [String!]!
    }
    input EditGameInput {
        title: String!,
        platform: [String!]!
    }

    input AddAuthorInput {
        name: String!,
        verified: Boolean!
    }
    input EditAuthorInput {
        name: String!,
        verified: Boolean!
    }

`