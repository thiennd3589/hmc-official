import React from "react";
import "./styles.scss";

const ProjectCard = ({ name, image, href }) => {
  return (
    <div className="ProjectCard" id={href}>
      <div className="image">
        <img src={image} alt={name} />
      </div>
      <div className="name">
        <div>
          <p>{name}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
