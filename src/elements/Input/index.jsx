import React, { useState, useRef } from "react";
import { Alert } from "../../components/Bootstrap";
import "./styles.scss";

const Input = ({ label, name, placeholder, type, onChange, required }) => {
  const ref = useRef({
    value: "",
  });

  const [showAlert, setShowAlert] = useState(false);

  const onCurrentInputChange = (event) => {
    ref.current.value = event.currentTarget.value.trim();
  };

  const handleShowAlert = () => {
    setShowAlert(true);
  };

  const handleHideAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className="Input">
      <label htmlFor={name}>{label}</label>
      {type === "textarea" ? (
        <textarea
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          rows={4}
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
          onFocus={handleHideAlert}
          onBlur={() => {
            if (required && ref.current.value === "") handleShowAlert();
          }}
        />
      )}
      {showAlert && <Alert variant="danger">Bạn chưa điền mục này!!!</Alert>}
    </div>
  );
};

export default Input;
