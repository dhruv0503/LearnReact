function OnClick() {
  // const handleClick = () => console.log("Ouch");
  const handleClick2 = (name) =>
    console.log(`Stop Clicking me already ${name}`);
  const textChanger = (e) => e.target.textContent = "It hurts!"

  return (
    <>
      <button onClick={() => handleClick2("Dhruv")}>Click Me 😘</button>
      <button onDoubleClick={(e) => textChanger(e)}>IT DOESNT HURT</button>
    </>
  );
}

export default OnClick;
