import React from "react";
import img1 from "../../../assets/Mobile/4.Administrators/HMCWeb_M_Ads_00.png";
import img2 from "../../../assets/Mobile/4.Administrators/HMCWeb_M_Ads_01.png";
import img3 from "../../../assets/Mobile/4.Administrators/HMCWeb_M_Ads_02.png";
import "./style.scss";
import MobileAdminsCard from "./MobileAdminsCard";

const MobileAdmins = () =>{
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
    return(
        <div className="AdminContainer">
            <div className="Sessions"><h2>ADMINISTRATORS</h2></div>
            <div className="Admins">
        {adminData.map((admin) => (
          <MobileAdminsCard
            key={admin.name}
            name={admin.name}
            pos={admin.position}
            img={admin.image}
            text={admin.sub}
            />
            ))}
            </div>
        </div>
    )
}
export default MobileAdmins;