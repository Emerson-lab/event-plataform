import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
 uri: import.meta.env.VITE_API_URL,
 headers: {
  'Athorazation': `Bearer${import.meta.env.VITE_API_AUTORIZATION_TOKEN}`
 },
 cache: new InMemoryCache()
})