// import {GraphQLClient} from "graphql-request";
import {ApolloClient,createHttpLink, InMemoryCache} from "@apollo/client";
import {setContext} from "apollo-link-context";
import BACKEND_URL from "../config";


const httpLink = createHttpLink({
    uri:BACKEND_URL,
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