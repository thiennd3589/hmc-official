import React from "react";
import MenuBar from "../../components/MobileComponent/MenuBar";
import MobileProjects from "../../components/MobileComponent/MobileProjects";
import MobileCarousel from "../../components/MobileComponent/MobileCarousel";
import MobileAdmins from "../../components/MobileComponent/MobileAdmins";
import "./styles.scss";

export default () => {
  return (
    <div className="MobileLanding">
      <MenuBar />
      <MobileCarousel />
      <MobileAdmins />
      <MobileProjects />
    </div>
  );
};
