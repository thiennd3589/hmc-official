import React from "react";

export default () => {
  const onSubmit = () => {
      
  };

  return (
    <div className="Login">
      <form>
        <label htmlFor="">Email:</label>
        <input type="email" /> <br />
        <label htmlFor="">Password: </label>
        <input type="password" /> <br />
        <button type="submit">Sumbit</button>
      </form>
    </div>
  );
};
