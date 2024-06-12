import React, {useState} from "react"

function UpdateArrayOfObjects(){

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    const addCar = () =>{

        const newCar = {year : carYear, make : carMake, model : carModel};
        setCars((c) => [...c, newCar]);

        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }

    const removeCar = (index) => {
        setCars(c => c.filter((_,i) => i !== index ))
    }

    const changeYear = (event) => {setCarYear( () => event.target.value)}
    
    const changeMake = (event) => {setCarMake( () => event.target.value)}

    const changeModel = (event) => {setCarModel( () => event.target.value)}

    return(
        <div>
            <h2>List of Car Objects</h2>
            <ul>
                {cars.map((car, index) => <li key={index} onClick={() => removeCar(index)}>{car.year} {car.make} {car.model}</li>)}
            </ul>

            <input id="y" type="number" value={carYear} onChange={changeYear}/><br />
            <input id="ma" type="text" value={carMake} onChange={changeMake} placeholder="Enter Car Make"/><br />
            <input id="mo" type="text" value={carModel} onChange={changeModel} placeholder="Enter Car Model"/><br />
            <button onClick={addCar}>Add Car</button>
        </div>
    )
}

export default UpdateArrayOfObjects