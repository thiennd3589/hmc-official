import React, { useRef } from "react";
import { useState } from "react";
import "./styles.scss";

const Input = ({ label, name, placeholder, type, onChange, value }) => {
  const ref = useRef({
    value: "",
  });

  const [, redraw] = useState();

  const onCurrentInputChange = (event) => {
    ref.current.value = event.currentTarget.value;
    redraw({});
  };

  return (
    <div className="Input">
      <label htmlFor={name}>{label}</label>
      {type === "textarea" ? (
        <textarea
          name={name}
          onChange={(event) => {
            onCurrentInputChange(event);
            onChange(event);
          }}
          placeholder={placeholder}
          rows={4}
          value={value ? value : ref.current.value}
        ></textarea>
      ) : (
        <input
          type={type ? type : "text"}
          name={name}
          placeholder={placeholder}
          onChange={(event) => {
            onCurrentInputChange(event);
            onChange(event);
          }}
          value={value ? value : ref.current.value}
        />
      )}
    </div>
  );
};

export default Input;
