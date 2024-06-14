import React, { useState } from "react";
function Scorekeeper(props) {
  const [arr, setArr] = useState(new Array(props.players).fill(0));
  const [status, setStatus] = useState({ won: false, player: null });

  const incrementScore = (index) => {
    if (!status.won) {
      setArr((a) => {
        const newArr = a.map((num, i) => {
          return i === index ? num + 1 : num;
        });

        if (newArr[index] === props.target) {
          setStatus({ won: true, player: index + 1 });
        }
        return newArr;
      });
    }
  };

  const resetScore = () => {
    setArr((a) => a.map(() => 0));
    setStatus({won : false, player : null})
  };

  return (
    <div>
      <h1>Scorekeeper</h1>
      <ul>
        {arr.map((num, index) => {
          return (
            <li key={index}>
              Player{index + 1} : {num}{" "}
              <button onClick={() => incrementScore(index)}>+1</button>
            </li>
          );
        })}
      </ul>
      {status.won && <h2>{`Player ${status.player} is the Winner`}</h2>}
      <button onClick={resetScore}>Reset</button>
    </div>
  );
}

export default Scorekeeper;
