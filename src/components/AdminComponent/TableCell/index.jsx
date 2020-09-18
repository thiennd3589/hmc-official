import * as React from "react";
import "./styles.scss";

const TableCell = (props) => {
  return (
    <div className="Cell">
      <div className="label">{props.label}:</div>
      <div className="value">{props.value}</div>
    </div>
  );
};

export default TableCell;
