'use client'
import {InMemoryCache,ApolloClient,ApolloProvider} from '@apollo/client'




const Apolloclinetsetup = new ApolloClient({
    uri:"http://localhost:3060/graphql",
    cache:new InMemoryCache()
})

export default function StartAppoloServer  ({children}) {
  return (
   <ApolloProvider client={Apolloclinetsetup}>
        {children}
    </ApolloProvider>
  )
}