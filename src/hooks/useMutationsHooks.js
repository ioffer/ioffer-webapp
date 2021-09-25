import {  useMutation } from '@apollo/client';
import {addKyc, addShop, confirmEmail, editUser, forgotPassword, imageUploader, registerUser, resetPassword,createPromotion,changePassword} from "../graphql/mutations";

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

export const ForgotPasswordHook=(onError,onSuccess)=>{
    return useMutation(forgotPassword,{onError:error =>onError(error),onCompleted:data => onSuccess(data) })
}

export const ResetPasswordHook=(onError,onSuccess)=>{
    return useMutation(resetPassword,{onError:error =>onError(error),onCompleted:data => onSuccess(data) })
}

export const CreatePromotionHook=(onError,onSuccess)=>{
    return useMutation(createPromotion,{onError:error =>onError(error),onCompleted:data => onSuccess(data) })
}

export const ChangePasswordHook=(onError,onSuccess)=>{
    return useMutation(changePassword,{onError:error =>onError(error),onCompleted:data => onSuccess(data) })
}