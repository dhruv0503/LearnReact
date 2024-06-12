import React, {useState} from 'react'

function UpdateObjects(){

    const [car, setCar] = useState({year : 2022, make : 'Tata', model : 'Altros'})

    const handleYearChange = (event) => setCar(c =>({...c, year : event.target.value}))
    const handleMakeChange = (event) => setCar(c => ({...c, make : event.target.value}))
    const handleModelChange = (event) => setCar(c => ({...c, model : event.target.value}))

    return(
        <div>
            <p>Your favourite car is : {car.year} {car.make} {car.model}</p>
            <input type="number" onChange={handleYearChange} value={car.year} /><br/>
            <input type="text" onChange={handleMakeChange} value={car.make} /><br/>
            <input type="text" onChange={handleModelChange} value={car.model} /><br/>
        </div>
    )
}

export default UpdateObjects