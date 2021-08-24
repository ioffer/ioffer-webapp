import {useLazyQuery, useQuery} from "@apollo/client";
import {loginUser, useMeQuery} from "../graphql/queries";

export const useMe=() =>{
    return useQuery(useMeQuery);
}
export const useLoginHooks=(onSuccess,onError) =>{
    return useLazyQuery(loginUser,{onError:error => onError(error),onCompleted:data => onSuccess(data)})
}