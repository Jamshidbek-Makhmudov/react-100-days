import React, { Children, ReactNode, useContext, useReducer } from 'react'
import AuthContext from '../AuthContext';
import authReducer from '../../reducers/authReducer';

interface Props { 
	children:ReactNode
}
const AuthProvider = ({ children}:Props) => {
	  const [user, dispatch]=useReducer(authReducer,"")
	return (
		<AuthContext.Provider value={{ user, dispatch }}>
			{ children}
		</AuthContext.Provider>
	)
}

export default AuthProvider