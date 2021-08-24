import {createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState :{
        user: null,
    },
    reducers: {
        login:( state, action)=>{
            state.user = action.payload;
        },
        logout: (state)=>{
            state.user= null;
        }
    }
})
export const kycSlice = createSlice({
    name: 'kyc',
    initialState :{
        user: null,
    },
    reducers: {
       addkyc:( state, action)=>{
            state.kyc = action.payload;
        },
        removekyc: (state)=>{
            state.kyc= null;
        }
    }
})
export const {login , logout }= userSlice.actions
export const {addkyc , removekyc }= kycSlice.actions

export const selectUser= (state) => state.user.user
export const selectKyc=(state)=> state.kyc


  