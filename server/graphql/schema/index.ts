import { gql } from 'apollo-server'

const typeDefs = gql`
  type Query {
    books: [Book]
  }
  type Book{
    title:String
    author: String
  }
`;

export default typeDefs;