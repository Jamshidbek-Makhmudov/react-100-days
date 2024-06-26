import { useContext, useReducer, useState } from "react";
import authReducer from "../reducers/authReducer";
import AuthContext from "../contexts/AuthContext";
import AuthProvider from "../contexts/custom-context/AuthProvider";
import useAuth from "../hooks/useAuth";

const LoginStatusWithReactContext = () => {
  //  const { user, dispatch} = useContext(AuthContext)
   const { user, dispatch} = useAuth()

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

export default LoginStatusWithReactContext;