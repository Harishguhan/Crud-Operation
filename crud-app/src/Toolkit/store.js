import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './CounterSlice';

console.log(counterReducer)
export const stores = configureStore({
    reducer:{
        count:counterReducer,
    },
})