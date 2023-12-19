import React from "react";

const Display = (props) => {
  const { input } = props;
  return <div className="displayBox">{input}</div>;
};

export default Display;
