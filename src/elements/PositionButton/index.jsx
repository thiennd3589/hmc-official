import React, { useState, useRef } from "react";
import "./styles.scss";
import { useEffect } from "react";

const PositionButton = ({ handlePositionSelect, positions, name, text,clear }) => {
  const [visiblePositions, setVisiblePositions] = useState(false);
  const ref = useRef({
    selectNumber: 0,
    selectPostion: {},
  });

  useEffect(() => {
    if (clear) {
      resetValue();
      setVisiblePositions(false);
    }
  }, [clear]);

  const resetValue = () => {
    ref.current.selectNumber = 0;
    ref.current.selectPostion = {};
  };

  const select = (event, name, value) => {
    event.stopPropagation();
    if (event.currentTarget.classList.contains("selected")) {
      event.currentTarget.classList.remove("selected");
      ref.current.selectPostion[value] = false;
      ref.current.selectNumber--;
      handlePositionSelect(name, value);
    } else if (ref.current.selectNumber >= 2) {
      alert("Chỉ được chọn tối đa 2 vị trí cho mỗi ban!");
    } else {
      ref.current.selectNumber++;
      ref.current.selectPostion[value] = true;
      event.currentTarget.classList.add("selected");
      handlePositionSelect(name, value);
    }
  };

  const showPositions = () => {
    !visiblePositions && setVisiblePositions(true);
  };

  const hidePositions = () => {
    visiblePositions && setVisiblePositions(false);
  };

  return (
    <div className="PositionButton">
      {!visiblePositions && (
        <div className="ButtonContent" onClick={showPositions}>
          <i className="fas fa-play"></i>
          <span>{text}</span>
        </div>
      )}
      {visiblePositions && (
        <div className="Positions">
          {positions.map((position, index) => (
            <div
              className={`Position ${
                ref.current.selectPostion[position.value] && "selected"
              }`}
              key={index}
              onClick={(event) => select(event, name, position.value)}
            >
              <i className="fas fa-play"></i>
              <span>{position.label}</span>
            </div>
          ))}
          <div className="Position" onClick={hidePositions}>
            <i className="fas fa-play"></i>
            <span>Done</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default PositionButton;
