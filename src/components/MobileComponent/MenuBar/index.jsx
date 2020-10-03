import React, { useEffect } from "react";
import MenuButton from "../../../assets/Mobile/1_AboutUS/MenuButton.jpg";
import logo from "../../../assets/Mobile/1_AboutUS/logo.png";
import "./styles.scss";

export default () => {
  let button;
  let menu;
  let menuBar;
  useEffect(() => {
    button = document.querySelector(".ToggleButton");
    menu = document.querySelector(".MobileMenu");
    menuBar = document.querySelector(".MenuBar");
  });

  const showMenu = () => {
    button.classList.add("ShowMenu");
    menu.classList.add("ShowMenu");
    menuBar.classList.add("ShowMenu");
  };

  const hideMenu = () => {
    button.classList.remove("ShowMenu");
    menu.classList.remove("ShowMenu");
    menuBar.classList.remove("ShowMenu");
  };

  return (
    <div className="MenuBar">
      <div className="MenuContainer">
        <div className="ToggleButton" onClick={showMenu}>
          <img src={MenuButton} alt="menu" />
        </div>
        <div className="MobileMenu">
          <div className="Content">
            <div className="title">
              <h3>HUST MEDIA CLUB</h3>
            </div>
            <div className="MenuItems">
              <a href="#about-us" onClick={hideMenu}>
                ABOUT US
              </a>
              <a href="#projects" onClick={hideMenu}>
                PROJECTS
              </a>
              <a href="#contacts" onClick={hideMenu}>
                CONTACTS
              </a>
            </div>
          </div>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};
