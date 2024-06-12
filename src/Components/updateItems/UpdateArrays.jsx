import React, {useState} from "react";

function UpdateArrays(){

    const [foods, setFoods] = useState(['Burger', 'Pizza', 'Bhole Chature']);

    const addFood = () => {
        const newFood = document.getElementById('foodInput').value;
        document.getElementById('foodInput').value = "";
        setFoods(f => [...f, newFood])
    }

    const removeFood = (index) => {
        setFoods(f => f.filter((_, i) => i !== index ))
    }

    return(<div>
        <h2>List of Foods</h2>
        <ul>
            {foods.map((food, index) => <li key={index} onClick={() => removeFood(index)}>{food}</li>)}
        </ul>

        <input type="text" id="foodInput" placeholder="Enter food name"/>
        <button onClick={addFood}> Add Food </button>
    </div>);
}

export default UpdateArrays;