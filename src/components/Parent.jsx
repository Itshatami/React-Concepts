import { useState } from "react";
import ChildA from "./ChildA";
import ChildB from "./ChildB";

const Parent = () => {
  const [number, setNumber] = useState(0);
  return (
    <>
      <button onClick={() => setNumber((number) => number + 1)}>+</button>
      <ChildA number={number} />
      <ChildB number={number} />
    </>
  );
};

export default Parent;
