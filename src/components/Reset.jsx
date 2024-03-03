import React from "react";
import { useContext } from "react";
import { RecoveryContext } from "../App";

export default function Reset() {
  const { setPage } = useContext(RecoveryContext);
  function changePassword() {
    setPage("recovered");
  }
  return (
    <>
      <div>
        <h2>change password</h2>
      </div>
      <div>
        <label>New password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="......."
          required=""
        ></input>
        <label>confirm password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="......."
          required=""
        ></input>
        <a>term and condition</a>
        <button onClick={() => changePassword()}>reset password</button>
      </div>
    </>
  );
}
