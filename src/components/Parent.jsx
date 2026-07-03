import { useState } from "react";
import ChildA from "./ChildA";
import ChildB from "./ChildB";
import Button from "./Button";
import ChildC from "./ChildC";
import StyledDiv from "./StyledDiv";

const Parent = () => {
  const [number, setNumber] = useState(0);

  const clickHandler = () => {
    setNumber((number) => number + 1);
  };

  return (
    <>
      <h1>React Concepts</h1>
      <StyledDiv>
        <button onClick={() => setNumber((number) => number + 1)}>+</button>
        <ChildA number={number} setNumber={setNumber} />
        <ChildB number={number} text={<button onClick={clickHandler}>+</button>} />
        <ChildC number={number} button={<Button clickHandler={clickHandler} />} />
      </StyledDiv>
    </>
  );
};

export default Parent;