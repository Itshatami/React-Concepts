const childStyle = {
  border: "1px solid orange",
  margin: "10px",
  padding: "10px",
};
const ChildC = ({ number, button }) => {
  return (
    <div style={childStyle}>
      <h3>Child C</h3>
      <p>{number}</p>
      {button}
    </div>
  );
};

export default ChildC;
