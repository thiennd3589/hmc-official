import React from "react";
import "./styles.scss";

const MissionCard = ({ title, content, icon }) => {
  return (
    <div className="MissionCard">
      <div className="icon">
        <img src={icon} alt="icon" />
      </div>
      <div className="title">
        <h3>{title}</h3>
      </div>
      <div className="content">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default MissionCard;
