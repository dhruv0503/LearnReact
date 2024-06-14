import React, {useState, useEffect} from "react";

function PlayWithWidthHeight(){

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight)

    const handleResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("Event Listened Added");

        return () => {
            window.removeEventListener('resize', handleResize);
            console.log("Event Listener Removed")
        }
    }, [])

    useEffect( () => {
        document.title = `Size : ${width} * ${height}`
    }, [width, height]);

    return(
        <>
            <p>Window Width : {width}px</p>
            <p>Window Height : {height}px</p>
        </>
    )
}
export default PlayWithWidthHeight;