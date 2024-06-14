import CompD from './CompD'

function CompC() {
  const boxStyles = {
    border: "3px solid",
    padding: "25px",
  };

  return (
    <div style={boxStyles}>
      <h1>Component C</h1>
      <CompD/>
    </div>
  );
}

export default CompC;
