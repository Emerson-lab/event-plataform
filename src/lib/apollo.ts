import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
 uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oucs4i19p701xl67r2gl4l/master',
 cache: new InMemoryCache()
})