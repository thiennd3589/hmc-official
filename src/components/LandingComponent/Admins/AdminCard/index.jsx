import React from "react";
import "./styles.scss";

const AdminCard = ({ image, position, name, sub }) => {
  return (
    <div className="AdminCard">
      <div className="CardContent">
        <div className="avatar">
          <img src={image} alt={name} />
        </div>
        <div className="info">
          <div className="main">
            <div className="position">
              <p>{position}</p>
            </div>
            <div className="name">
              <p>{name}</p>
            </div>
          </div>
          <div className="sub">
            <p>{sub}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCard;
