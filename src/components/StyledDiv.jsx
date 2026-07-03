function StyledDiv({ children }) {
  
  const style = {
    border: "1px solid black",
    margin: "10px",
    padding: "10px",
    maxWidth: "200px",
  };
  return <div style={style}>{children}</div>;
}

export default StyledDiv;
