import React, { useState } from "react";
import { Carousel } from "../../Bootstrap";
import Item from "./Item";
import img1 from "../../../assets/1_About_Us/img1.jpg";
import img2 from "../../../assets/1_About_Us/img2.jpg";
import img3 from "../../../assets/1_About_Us/img3.jpg";
import logo from "../../../assets/1_About_Us/logo.png";
import "./styles.scss";

const CarouselComp = () => {
  const [isHD, setHD] = useState(
    window.innerWidth / window.innerHeight >= 1920 / 1080
  );

  window.addEventListener("resize", () => {
    if (window.innerWidth / window.innerHeight < 1920 / 1080 && isHD === true) {
      setHD(false);
    } else if (
      window.innerWidth / window.innerHeight >= 1920 / 1080 &&
      isHD === false
    ) {
      setHD(true);
    }
  });

  return (
    <div className="Introduction">
      <Carousel pause={false}>
        <Carousel.Item>
          <Item
            background={img1}
            title="ABOUT US"
            describe="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere deleniti quam ab ipsa, rem assumenda nobis itaque ipsam architecto ad eaque officia voluptas fugit animi cupiditate sapiente? Rem, veritatis est?"
            image={logo}
            id="about-us"
            isHD={isHD}
          />
        </Carousel.Item>
        <Carousel.Item>
          <Item
            background={img2}
            title="ATTRIBUTE"
            describe="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere deleniti quam ab ipsa, rem assumenda nobis itaque ipsam architecto ad eaque officia voluptas fugit animi cupiditate sapiente? Rem, veritatis est? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere deleniti quam ab ipsa, rem assumenda nobis itaque ipsam architecto ad eaque officia voluptas fugit animi cupiditate sapiente? Rem, veritatis est?"
            id="attribute"
            isHD={isHD}
          />
        </Carousel.Item>
        <Carousel.Item>
          <Item
            background={img3}
            title="CREATIVITY"
            describe="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere deleniti quam ab ipsa, rem assumenda nobis itaque ipsam architecto ad eaque officia voluptas fugit animi cupiditate sapiente? Rem, veritatis est? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere deleniti quam ab ipsa, rem assumenda nobis itaque ipsam architecto ad eaque officia voluptas fugit animi cupiditate sapiente? Rem, veritatis est?"
            id="creativity"
            isHD={isHD}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComp;
