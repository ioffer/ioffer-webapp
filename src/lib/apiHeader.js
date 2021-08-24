import {ApolloClient,ApolloLink,concat, InMemoryCache} from "@apollo/client";
import {createUploadLink} from "apollo-upload-client";
import BACKEND_URL from "../config";


const httpLink=createUploadLink({uri:BACKEND_URL});
const authMiddleware = new ApolloLink((operation, forward) => {
    operation.setContext({
        headers: {
            authorization: localStorage.getItem('token') || null,
        }
    });

    return forward(operation);
})

export const client = new ApolloClient({
    link:  concat(authMiddleware,httpLink) ,
    cache: new InMemoryCache()
});