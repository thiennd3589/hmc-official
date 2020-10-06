import React, { useRef, useState, useEffect } from "react";
import CheckBoxes from "../Checkboxes";
import "./styles.scss";

const GRADE_OPTIONS = [
  {
    label: "K62",
    value: "K62",
  },
  {
    label: "K63",
    value: "K63",
  },
  {
    label: "K64",
    value: "K64",
  },
  {
    label: "K65",
    value: "K65",
  },
  {
    label: "Khác",
    value: "K65",
    type: "input",
    placeholder: "(Khác)",
  },
];

const GradeButton = ({ handleRadioSelect, onChange, value }) => {
  const [visibleCheckbox, setVisibleCheckbox] = useState(false);
  const [placeholder, setPlaceholder] = useState(value ? value : "Lựa chọn");
  const ref = useRef();

  useEffect(() => {
    document.addEventListener("click", (event) => {
      if (
        ref.current == null &&
        event.target.className !== "ButtonContent" &&
        event.target.name !== "Grade"
      ) {
        hideCheckbox();
      }
    });
  });

  const showCheckbox = () => {
    !visibleCheckbox && setVisibleCheckbox(true);
  };
  const hideCheckbox = () => {
    visibleCheckbox && setVisibleCheckbox(false);
  };

  const changePlaceholder = (placeholder) => {
    setPlaceholder(placeholder);
  };

  const onCurrentChange = (event) => {
    setPlaceholder(event.target.value);
  };

  return (
    <div className="GradeButton" onClick={showCheckbox}>
      <label>5. Bạn là sinh viên khóa?*</label>
      {!visibleCheckbox && (
        <div className="ButtonContent" ref={ref}>
          <i className="fas fa-play"></i>
          <span>{placeholder}</span>
        </div>
      )}
      {visibleCheckbox && (
        <CheckBoxes
          options={GRADE_OPTIONS}
          name="Grade"
          handleSelect={handleRadioSelect}
          onChange={(event) => {
            onChange(event);
            onCurrentChange(event);
          }}
          toggle={hideCheckbox}
          changePlaceholder={changePlaceholder}
        />
      )}
    </div>
  );
};

export default GradeButton;
