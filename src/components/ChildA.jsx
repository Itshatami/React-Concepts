const childStyle = {
  border: "1px solid blue",
  margin: "10px",
  padding: "10px",
};
const ChildA = ({ number, setNumber }) => {
  return (
    <div style={childStyle}>
      <h3>Child A</h3>
      <p>{number}</p>
      <button onClick={() => setNumber((number) => number + 1)}>+</button>
    </div>
  );
};

export default ChildA;
