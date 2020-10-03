import React from "react";
import { Carousel } from "../../Bootstrap";
import Project from "./MobileProject";
import prj1 from "../../../assets/3_Projects/img1.jpg";
import prj2 from "../../../assets/3_Projects/img2.jpg";
import prj3 from "../../../assets/3_Projects/img3.jpg";
import prj4 from "../../../assets/3_Projects/img4.jpg";
import "./styles.scss";

export default () => {
  return (
    <div className="MobileProjects" id="projects">
      <div className="Section">
        <h3>PROJECTS</h3>
      </div>
      <Carousel pause={false}>
        <Carousel.Item>
          <div className="GroupProject">
            <Project image={prj1} title="GRADUATON CEREMONY" />
            <Project image={prj2} title="CHÀO TÂN K64" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="GroupProject">
            <Project image={prj3} title="BÁCH KHOA MỘT CHUYỆN TÌNH" />
            <Project image={prj4} title="THANH XUÂN, TỚ VÀ CẬU" />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
