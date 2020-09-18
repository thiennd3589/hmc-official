import React from "react";
import Divider from "../Divider";
import "./styles.scss";

const Contact = ({ toggleForm }) => {
  return (
    <div className="Contact">
      <Divider color="red" />
      <div className="Session">
        <h2>CONTACTS</h2>
      </div>
      <div className="Register" id="contact">
        <p>Sign up today & be one of us</p>
        <button onClick={toggleForm}>REGISTER</button>
      </div>
    </div>
  );
};

export default Contact;
