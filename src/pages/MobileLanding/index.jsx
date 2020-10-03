import React from "react";
import MenuBar from "../../components/MobileComponent/MenuBar";
import MobileProjects from "../../components/MobileComponent/MobileProjects";
import MobileCarousel from "../../components/MobileComponent/MobileCarousel";
import "./styles.scss";

export default () => {
  return (
    <div className="MobileLanding">
      <MenuBar />
      <MobileCarousel />
      <MobileProjects />
    </div>
  );
};
