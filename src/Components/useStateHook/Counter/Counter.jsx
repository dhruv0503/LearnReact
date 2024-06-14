import React, {useState} from 'react'
import './Counter.css'

function Counter(){

    const [count, setCount] = useState(0);

    const incrementCount = () => setCount(count + 1)

    const decrementCount = () => setCount(count - 1)
    
    return(
        <div className='container'>
            <p className='display'>{count}</p>
            <button onClick={incrementCount}>Increment</button>
            <button onClick={decrementCount}>Decrement</button>
        </div>
    )

}

export default Counter;