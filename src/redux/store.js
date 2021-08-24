import { configureStore } from '@reduxjs/toolkit'
import { RootReducer } from './RootReducer'



export default configureStore({
    reducer: RootReducer,
 })