import React from "react";
import "./styles.scss";

const Detail = ({ icon, info }) => {
  return (
    <div className="Detail">
      <i className={icon}></i>
      <div className="information">{info}</div>
    </div>
  );
};

export default () => {
  const infos = [
    {
      icon: "fas fa-phone-alt",
      info: "0375.8008.833 (Mr.Duc Anh)",
    },
    {
      icon: "fas fa-envelope",
      info: "hustmediaclub@gmail.com",
    },
    {
      icon: "fas fa-map-marker-alt",
      info: "Number 1, Dai Co Viet street, Hai Ba Trung dist, Ha Noi",
    },
  ];

  return (
    <div className="MobileFooter">
      <div className="Title">
        <h2>HUST MEDIA CLUB</h2>
        <h3>ALWAYS BE YOUR MOMENT</h3>
        <p>For futher information and business, please contact</p>
      </div>
      <div className="Contacts">
        {infos.map((info) => (
          <Detail icon={info.icon} info={info.info} key={info.icon} />
        ))}
      </div>
    </div>
  );
};
