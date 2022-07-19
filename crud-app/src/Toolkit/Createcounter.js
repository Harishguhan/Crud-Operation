import { createSlice } from '@reduxjs/toolkit';
import Counter from './Counter';

const initialstate = {
    value:0,
}

console.log(initialstate)
export const Createcounter = createSlice({
    name:'counter',
    initialstate,
    reducers:{
        increment:(state) =>{
            console.log(state)
            state.value +=1
        },
        decrement:(state) =>{
            state.value -=1
        },
        incrementByAmount:(state,action) =>{
                state.value +=action.payload
        }
    }
})

export const { increment,decrement,incrementByAmount } = Createcounter.actions

export default Createcounter.reducer