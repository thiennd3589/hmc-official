import React from "react";
import "./styles.scss";

const Item = (props) => {
  return (
    <div className={`MobileItem`}>
      <div className="background">
        <img src={`${props.background}`} alt="background" />
      </div>
      <div className="ContentContainer">
        <div className="CarouselItemContent">
          <div className="ContentAfter">
            <div className="content">
              <div className="title">
                <h3>{props.title}</h3>
              </div>
              <div className="describe">
                <p>{props.describe}</p>
              </div>
            </div>
          </div>

          {props.image && (
            <div className="image">
              <img src={props.image} alt="addition" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Item;
