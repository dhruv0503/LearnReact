import { useEffect, useRef, useState } from "react"

function UseRef() {

    const ref = useRef(null);

    
    useEffect( () => {
        console.log("Component Rendered")
    })

    const handleClick = () => {
        ref.current.focus();
        ref.current.style.backgroundColor = "red";
    }

  return (
    <div>
        <button onClick={handleClick}>Click me</button>
        <input ref={ref} />
    </div>
  )
}

export default UseRef