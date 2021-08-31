import {  useMutation } from '@apollo/client';
import {addKyc, addShop, confirmEmail, editUser, imageUploader, registerUser} from "../graphql/mutations";

export const RegisterUserHook=(onError,onSuccess)=>{
    return useMutation(registerUser,{onError:error => onError(error),onCompleted:data => onSuccess(data)})
}
export const AddKycHook=(onError,onSuccess)=>{
    return useMutation(addKyc,{onError:error => onError(error),onCompleted:data => onSuccess(data)})
}
export const ImageUploadHook=(onError,onSuccess)=>{
    return useMutation(imageUploader,{onError:error =>onError(error),onCompleted:data => onSuccess(data) })
}
export const AddShopHook=(onError,onSuccess)=>{
    return useMutation(addShop,{onError:error =>onError(error),onCompleted:data => onSuccess(data) })
}
export const EditUserHook=(onError,onSuccess)=>{
    return useMutation( editUser, {onError:error =>onError(error),onCompleted:data => onSuccess(data) })
}

export const ConfirmEmailHook=(onError,onSuccess)=>{
    return useMutation(confirmEmail,{onError:error =>onError(error),onCompleted:data => onSuccess(data) })
}