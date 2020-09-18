import React from "react";
import "./styles.scss";

const CheckBoxes = ({
  options,
  handleSelect,
  name,
  onChange,
  toggle,
  changePlaceholder,
}) => {
  const handleEnter = (event) => {
    event.key === "Enter" && toggle();
  };

  return (
    <div className="CustomCheckboxes">
      <ul>
        {options.map((option, index) =>
          option.type === "input" ? (
            <li
              className="RadioButton"
              key={index}
              data-value={option.value}
              data-name={name}
            >
              <input
                name={name}
                type="text"
                placeholder={option.placeholder}
                onChange={onChange}
                onKeyPress={(event) => {
                  handleEnter(event);
                  changePlaceholder("Khác");
                }}
                tabIndex={0}
              />
            </li>
          ) : (
            <li
              className="RadioButton"
              key={index}
              onClick={() => {
                handleSelect(name, option.value);
                changePlaceholder(option.value);
                toggle();
              }}
            >
              {option.label}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default CheckBoxes;
