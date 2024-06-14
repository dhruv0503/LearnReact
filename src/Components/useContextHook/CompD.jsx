import {useContext} from "react";
import { UserContext } from "./CompA";

function CompD() {

  const user = useContext(UserContext);

  const boxStyles = {
    border: "3px solid",
    padding: "25px",
  };

  return (
    <div style={boxStyles}>
      <h1>Component D</h1>
      <h2>Bye : {user}</h2>
    </div>
  );
}

export default CompD;
