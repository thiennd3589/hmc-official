import React from "react";
import ProjectCard from "./ProjectCard";
import Divider from "../Divider";
import img1 from "../../../assets/3_Projects/img1.jpg";
import img2 from "../../../assets/3_Projects/img2.jpg";
import img3 from "../../../assets/3_Projects/img3.jpg";
import img4 from "../../../assets/3_Projects/img4.jpg";
import "./styles.scss";
import { useEffect } from "react";

const Projects = () => {
  let isDown = false;
  let startX;
  let scrollLeft;
  let projects;

  useEffect(() => {
    projects = document.querySelector(".Projects");
  });

  const projectsData = [
    {
      name: "GRADUATION CEREMONY",
      image: img1,
      link:
        "https://www.facebook.com/media/set/?vanity=hustmediaclub&set=a.612139035934852",
    },
    {
      name: "CHÀO TÂN 2019",
      image: img2,
      link:
        "https://www.facebook.com/media/set/?vanity=hustmediaclub&set=a.696317104183711",
    },
    {
      name: "BÁCH KHOA MỘT CHUYỆN TÌNH",
      image: img3,
      link:
        "https://www.facebook.com/media/set/?vanity=hustmediaclub&set=a.706021426546612",
    },
    {
      name: "THANH XUÂN, TỚ VÀ CẬU",
      image: img4,
      link:
        "https://www.facebook.com/media/set/?vanity=hustmediaclub&set=a.701498993665522",
    },
  ];

  const moveRight = () => {
    if (projects.scrollLeft < 3000) {
      projects.scrollLeft = projects.scrollLeft + 1200;
    }
  };

  const moveLeft = () => {
    if (projects.scrollLeft > 0) {
      projects.scrollLeft = projects.scrollLeft - 1200;
    }
  };

  const handleMouseDown = (event) => {
    isDown = true;
    projects.classList.add("active");
    startX = event.pageX - projects.offsetLeft;
    scrollLeft = projects.scrollLeft;
  };

  const handleMouseUp = () => {
    isDown = false;
  };

  const handleMouseLeave = () => {
    isDown = false;
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - projects.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    projects.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="ProjectsContainer" id="projects">
      <Divider color="red" />
      <div className="Session">
        <h2>PROJECTS</h2>
      </div>
      <div
        className="Projects"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        <button className="right-arrow" onClick={moveRight}>
          <i className="fas fa-chevron-right"></i>
        </button>
        <button className="left-arrow" onClick={moveLeft}>
          <i className="fas fa-chevron-left"></i>
        </button>
        {projectsData.map((project) => (
          <ProjectCard
            key={project.name}
            name={project.name}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
