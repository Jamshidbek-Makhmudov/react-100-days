import { useReducer, useState } from "react";
import authReducer from "../reducers/authReducer";

const LoginStatusWithReducer = () => {
const [user, dispatch]=useReducer(authReducer,"")

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => dispatch({type:"LOGOUT"})} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a onClick={() => dispatch({type:"LOGIN", username:"james adams"})} href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatusWithReducer;