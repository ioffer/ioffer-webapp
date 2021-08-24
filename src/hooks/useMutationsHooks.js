import {  useMutation } from '@apollo/client';
import {addkyc, addShop, imageUploader, registerUser} from "../graphql/mutations";

export const RegisterUserHook=()=>{
    return useMutation(registerUser)
}
export const AddKycHook=(onError,onSuccess)=>{
    return useMutation(addkyc,{onError:error => onError(error),onCompleted:data => onSuccess(data)})
}
export const ImageUploadHook=(onError,onSuccess)=>{
    return useMutation(imageUploader,{onError:error =>onError(error),onCompleted:data => onSuccess(data) })
}
export const AddShopHook=()=>{
    return useMutation(addShop)
}