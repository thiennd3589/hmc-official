import React from "react";
import { Carousel } from "../../Bootstrap";
import MobileItem from "./Item";
import img1 from "../../../assets/Mobile/1_AboutUS/img1.jpg";
import img2 from "../../../assets/Mobile/1_AboutUS/img2.jpg";
import img3 from "../../../assets/Mobile/1_AboutUS/img3.jpg";

import "./styles.scss";

export default () => {
  return (
    <div id="about-us">
      <Carousel pause={false}>
        <Carousel.Item>
          <MobileItem
            background={img1}
            title="ABOUT US"
            describe="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere deleniti quam ab ipsa, rem assumenda nobis itaque ipsam architecto ad eaque officia voluptas fugit animi cupiditate sapiente? Rem, veritatis est?"
          />
        </Carousel.Item>
        <Carousel.Item>
          <MobileItem
            background={img2}
            title="ATTRIBUTE"
            describe="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere deleniti quam ab ipsa, rem assumenda nobis itaque ipsam architecto ad eaque officia voluptas fugit animi cupiditate sapiente? Rem, veritatis est? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere deleniti quam ab ipsa, rem assumenda nobis itaque ipsam architecto ad eaque officia voluptas fugit animi cupiditate sapiente? Rem, veritatis est?"
          />
        </Carousel.Item>
        <Carousel.Item>
          <MobileItem
            background={img3}
            title="CREATIVITY"
            describe="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere deleniti quam ab ipsa, rem assumenda nobis itaque ipsam architecto ad eaque officia voluptas fugit animi cupiditate sapiente? Rem, veritatis est? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere deleniti quam ab ipsa, rem assumenda nobis itaque ipsam architecto ad eaque officia voluptas fugit animi cupiditate sapiente? Rem, veritatis est?"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
