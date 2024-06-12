import React, {useState} from "react";

function ChangeElement(){
    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(0);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState();
    const [shipping, setShipping] = useState("Delivery")

    const handleClik = (event) => setName(event.target.value)
    const handleQuantity = (event) => setQuantity(event.target.value)
    const handleComment = (event) => setComment(event.target.value)
    const handlePayment = (event) => setPayment(event.target.value)
    const handleShipping = (event) => setShipping(event.target.value)

    return (
        <div>
            <input value={name} onChange={handleClik} />
            <p>Name : {name}</p>

            <input value = {quantity} type="number" onChange={handleQuantity} />
            <p>Quanity : {quantity}</p>

            <textarea value={comment} onChange={handleComment} placeholder="Leave a Comment"/>
            <p>Comment : {comment}</p>

            <select value={payment} onChange={handlePayment}>
                <option value="">Select an Option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Giftcard">Giftcard</option>
            </select>
            <p>Payment Method : {payment}</p>

            <label><input type="radio" value="Pick Up" checked={shipping === "Pick Up"} onChange={handleShipping}/> PickUp </label>
            <label><input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShipping}/> Delivery </label>
            <p>Shipping : {shipping}</p>

        </div>
    )
}

export default ChangeElement;