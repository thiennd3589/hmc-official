import React from "react";
import "./styles.scss";

export default ({ image, title }) => {
  return (
    <div className="MobileProject">
      <div className="ProjectContainer">
        <div className="image">
          <img src={image} alt={title} />
        </div>
        <div className="title">
          <span>{title}</span>
        </div>
      </div>
    </div>
  );
};
