import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4rqvoxk1i0a01yw6o95hlc8/master' ,
    cache: new InMemoryCache(),
});