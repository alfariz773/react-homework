import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authslice';
import productReducer from './productSlice';

var store = configureStore({
    reducer:{
             auth: authReducer,
             product: productReducer

    }
});
export default store;