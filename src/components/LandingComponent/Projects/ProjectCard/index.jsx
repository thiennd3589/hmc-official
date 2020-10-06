import React from "react";
import "./styles.scss";

const ProjectCard = ({ name, image, href, link }) => {
  return (
    <div className="ProjectCard" id={href}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="image">
          <img src={image} alt={name} />
        </div>
        <div className="name">
          <div>
            <p>{name}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
