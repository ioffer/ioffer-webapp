// import {GraphQLClient} from "graphql-request";
import {ApolloClient,createHttpLink,  ApolloProvider, InMemoryCache} from "@apollo/client";
import {setContext} from "apollo-link-context";


export const backendUri='http://192.168.1.4:4000/graphql';
const httpLink = createHttpLink({
    uri:backendUri,
});
const authLink = setContext((_, { headers }) => {
    return {
        headers: {
            ...headers,
            Authorization: `${localStorage.getItem('token')?localStorage.getItem('token'):''}`
        }
    }
});
export const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});