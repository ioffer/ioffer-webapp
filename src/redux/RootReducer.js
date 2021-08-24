import { createStore, combineReducers } from 'redux'
import { kycSlice, userSlice } from './reducer/userSlice'

export const RootReducer = combineReducers({
    user: userSlice.reducer,
    kyc: kycSlice.reducer
  })