import React from "react";

const Square = (props) => {
  return (
    <button
      style={{
        width: "60px",
        height: "60px",
        fontSize: "30px"
      }}
      onClick={props.clicked}
    >
      {props.value}
    </button>
  );
};

export default Square;
