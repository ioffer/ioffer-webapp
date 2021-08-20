import {  useMutation } from '@apollo/client';
import {addkyc, addShop, imageUploader, registerUser} from "../graphql/mutations";

export const RegisterUserHook=()=>{
    return useMutation(registerUser)
}
export const AddkycHook=()=>{
    return useMutation(addkyc)
}
export const ImageUploadHook=()=>{
    return useMutation(imageUploader)
}
export const AddShopHook=()=>{
    return useMutation(addShop)
}