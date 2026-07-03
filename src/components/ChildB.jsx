const childStyle = {
  border: "1px solid red",
  margin: "10px",
  padding: "10px",
};
const ChildB = ({ number }) => {
  return (
    <div style={childStyle}>
      <h3>Child B</h3>
      <p>{number}</p>
    </div>
  );
};

export default ChildB;
