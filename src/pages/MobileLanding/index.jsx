import React from "react";
import MenuBar from "../../components/MobileComponent/MenuBar";
import MobileProjects from "../../components/MobileComponent/MobileProjects";
import MobileCarousel from "../../components/MobileComponent/MobileCarousel";
import MobileAdmins from "../../components/MobileComponent/MobileAdmins";
import MobileContact from "../../components/MobileComponent/MobileContact";
import MobileFooter from "../../components/MobileComponent/MobileFooter";
import "./styles.scss";

export default () => {
  return (
    <div className="MobileLanding">
      <MenuBar />
      <MobileCarousel />
      <MobileAdmins />
      <MobileProjects />
      <MobileContact />
      <MobileFooter />
    </div>
  );
};
