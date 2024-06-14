import CompC from './CompC'

function CompB() {
  const boxStyles = {
    border: "3px solid",
    padding: "25px",
  };

  return (
    <div style={boxStyles}>
      <h1>Component B</h1>
      <CompC/>
    </div>
  );
}

export default CompB;
