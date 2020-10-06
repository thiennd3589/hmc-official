import React from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../../redux/SignUp/actions";
import './styles.scss'

export default () => {
  const ref = useRef({ email: "", password: "" });
  const dispatch = useDispatch();
  const onChange = (event) => {
    ref.current[event.target.name] = event.target.value;
  };
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(ref.current);
    dispatch(signUp(ref.current));
  };

  return (
    <div className="Login">
      <h2>HMC-ALWAYS BE YOURS MOMENT</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="">Email:</label>
        <input type="email" name="email" onChange={onChange} />
        <label htmlFor="">Password: </label>
        <input type="password" name="password" onChange={onChange} />
        <button type="submit">Sumbit</button>
      </form>
    </div>
  );
};
