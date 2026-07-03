import { useState } from "react";
import ChildA from "./ChildA";
import ChildB from "./ChildB";

const parentStyle = {
  border: "1px solid black",
  margin: "10px",
  padding: "10px",
  maxWidth: "200px",
};

const Parent = () => {
  const [number, setNumber] = useState(0);

  const clickHandler = () => {
    setNumber((number) => number + 1);
  };

  return (
    <>
      <h1>React Concepts</h1>
      <div style={parentStyle}>
        <button onClick={() => setNumber((number) => number + 1)}>+</button>
        <ChildA number={number} setNumber={setNumber} />
        <ChildB number={number} text={<button onClick={clickHandler}>+</button>} />
      </div>
    </>
  );
};

export default Parent;
