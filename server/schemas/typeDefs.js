// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
   type User {
        _id: ID!
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }

    type Book {
        bookId: id
        authors: [String]
        title: string
        image: string
        link: string
    }

    type Auth {
        token: ID!
        user: User
    }


      type Query {
         me: User
                 }
        `;

// export the typeDefs
module.exports = typeDefs;