import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { increment,decrement } from './CounterSlice';
const Counter = () => {
    const count = useSelector((state)=>state.count.value)
    const dispatch = useDispatch()
  return (
    <div>
      <h1>{count}</h1>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(decrement())}>decrement</button>
    </div>
  )
}

export default Counter