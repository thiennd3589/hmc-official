import React from "react";
import logo from "../../../assets/1_About_Us/logo.png";
import "./styles.scss";

const Detail = ({ icon, info }) => {
  return (
    <div className="Detail">
      <i className={icon}></i>
      <div className="information">{info}</div>
    </div>
  );
};

const Footer = () => {
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
    <div className="Footer">
      <div className="Info">
        <div className="title">
          <div className="slogan">HUST MEDIA CLUB - ALWAYS BE YOUR MOMENTS</div>
          <div className="sub">
            For futher information and bussiness, please contact
          </div>
        </div>
        <div className="futher-detail">
          {infos.map((info) => (
            <Detail icon={info.icon} info={info.info} key={info.icon} />
          ))}
        </div>
      </div>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Footer;
