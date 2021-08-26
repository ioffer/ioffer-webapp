import {  useMutation } from '@apollo/client';
import {addkyc, addShop, editUser, imageUploader, registerUser} from "../graphql/mutations";

export const RegisterUserHook=(onError,onSuccess)=>{
    return useMutation(registerUser,{onError:error => onError(error),onCompleted:data => onSuccess(data)})
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
export const EditUserHook=(onError,onSuccess)=>{
    return useMutation( editUser, {onError:error =>onError(error),onCompleted:data => onSuccess(data) })
}