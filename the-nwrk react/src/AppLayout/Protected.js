import React from 'react';
import { Navigate } from 'react-router-dom';

const AuthLayout = ({ children }) => {
//find the cookies and split them
//sort through and find the name token
//verify the token
  const token = document.cookie
  .split(',').find(rows => rows.startsWith('token'))?.split('=')[1];
  
  if(!token){

    return <Navigate to='/login'/>
  }
  return <>{children}</>;
};

export default AuthLayout;  