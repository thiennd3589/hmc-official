import React from "react";
import Divider from "../Divider";
import img1 from "../../../assets/4_Administrators/HMCWeb_M_Ads_00.jpg";
import img2 from "../../../assets/4_Administrators/HMCWeb_M_Ads_01.jpg";
import img3 from "../../../assets/4_Administrators/HMCWeb_M_Ads_02.jpg";
import "./styles.scss";
import AdminCard from "./AdminCard";

const Admins = () => {
  const adminData = [
    {
      name: "TRẦN ĐỨC ANH",
      position: "President/Founder",
      image: img1,
      sub: "#FFFFFF",
    },
    {
      name: "NGUYỄN MINH HIẾU",
      position: "Vice President (Technical)",
      image: img2,
      sub: "#1F1F1F",
    },
    {
      name: "BÙI THỊ HẢI YẾN",
      position: "Vice President (Content)",
      image: img3,
      sub: "#E20216",
    },
  ];
  return (
    <div className="AdminsContainer">
      <Divider />
      <div className="Session">
        <h2>ADMINISTRATORS</h2>
      </div>
      <div className="Admins">
        {adminData.map((admin) => (
          <AdminCard
            key={admin.name}
            name={admin.name}
            position={admin.position}
            image={admin.image}
            sub={admin.sub}
          />
        ))}
      </div>
    </div>
  );
};

export default Admins;
