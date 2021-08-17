import {useLazyQuery, useQuery} from "@apollo/client";
import {loginUser, useMeQuery} from "../graphql/queries";

export const useMe=() =>{
    return useQuery(useMeQuery);
}
export const useLoginHooks=() =>{
    return useLazyQuery(loginUser)
}