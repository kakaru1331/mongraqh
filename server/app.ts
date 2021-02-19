import { ApolloServer } from 'apollo-server'
import typeDefs from './graphql/schema'
import resolvers from './graphql/resolvers'

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true
})

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
