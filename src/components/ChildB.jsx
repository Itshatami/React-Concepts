const childStyle = {
  border: "1px solid red",
  margin: "10px",
  padding: "10px",
};
const ChildB = ({ number, text }) => {
  return (
    <div style={childStyle}>
      <h3>Child B</h3>
      <p>{number}</p>
      {text}
    </div>
  );
};

export default ChildB;
