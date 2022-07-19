import { configureStore } from '@reduxjs/toolkit';
import Createcounter from './Createcounter';
export const stores = configureStore({
    reducer:{
        counter:Createcounter,
    },
})