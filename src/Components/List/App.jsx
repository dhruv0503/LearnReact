import List from "./Components/List/List";

function App() {
  const fruits = [
    { id: 1, name: "apple", calories: 120 },
    { id: 2, name: "banana", calories: 140 },
    { id: 3, name: "tomato", calories: 160 },
    { id: 4, name: "mango", calories: 100 },
  ];
  const vegetables = [
    { id: 5, name: "spinach", calories: 120 },
    { id: 6, name: "Bitter Gourd", calories: 140 },
    { id: 7, name: "Potato", calories: 160 },
    { id: 8, name: "Coriander", calories: 100 },
  ];

  return <>
  {fruits.length > 0 && <List items={fruits} category="fruits" />}
  {vegetables.length > 0 && <List items={vegetables} category="vegetables" />}
  </>;
}

export default App;
