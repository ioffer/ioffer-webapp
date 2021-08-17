import {  useMutation } from '@apollo/client';
import {registerUser} from "../graphql/mutations";

export const RegisterUserHook=()=>{
    return useMutation(registerUser)
}