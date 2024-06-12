import './Card.css'

function Card(){

    return(
        <div className="card">
            <img className='card-image' src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Nature" />
            <h2 className="card-title">Nature</h2>
            <p className="card-text">This is refreshing</p>
        </div>
    );
}

export default Card;