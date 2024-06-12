import PropTypes from 'prop-types';

function List(props){
    
    const fruits = props.items;
    const head = props.category;
    // fruits.sort((a, b) => a.calories - b.calories);
    
    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 140)

    const listItems = fruits.map(fruit => <li key={fruit.id}> {fruit.name} : <b>{fruit.calories}</b></li>);


    return <>
        <h3>{head}</h3>
        <ol>{listItems}</ol>
    </>
}

List.propTypes = {
    category : PropTypes.string,
    items : PropTypes.arrayOf(PropTypes.shape({ id : PropTypes.number, name : PropTypes.string, calories : PropTypes.number }))
}

List.defaultProps = {
    category : "Category",
    items : []
}
export default List;