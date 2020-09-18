import React from "react";
import "./styles.scss";

const Divider = ({ color }) => {
  const background = color === "red" ? "#c42f3b" : "#fff";
  return <div className="CustomDivider" style={{ background }}></div>;
};

export default Divider;
