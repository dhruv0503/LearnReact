import React, {useState, useEffect} from 'react'

function UseEffect(){
    const [count, setCount] = useState(0);
    const [text, setText] = useState('A');
    const [color, setColor] = useState('green');

    useEffect(() => {
        setText(`Hook Effect : ${count} ${color}`);
    }, [count, color]);

    const addCount = () => setCount((c) => c + 1);

    const changeColor = () => setColor(color === 'green' ? 'red' : 'green');

    return(
        <>
            <h1>{text}</h1>
            <p style={{color : color}}>Count : {count}</p>
            <button onClick={addCount}>Add</button><br />
            <button onClick={changeColor}>Change Color</button>

        </>
    )
}

export default UseEffect;