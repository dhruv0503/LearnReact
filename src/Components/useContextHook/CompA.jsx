import { useState, createContext } from "react";
import CompB from "./CompB";

export const UserContext = createContext();

function CompA() {
  const boxStyles = {
    border: "3px solid",
    padding: "25px",
  };

  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState("Dhruv");

  return (
    <div style={boxStyles}>
      <h1>Component A</h1>
      <h2>Hello : {user}</h2>
      <UserContext.Provider value={user}>
        <CompB user={user} />
      </UserContext.Provider>
    </div>
  );
}

export default CompA;
