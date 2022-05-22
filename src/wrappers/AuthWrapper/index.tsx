import Cookies from 'js-cookie';
import React from 'react';
import { Navigate } from 'react-router-dom';
import { ACCESS_TOKEN } from 'utils/axios';

const AuthWrapper = () => {
  if (!Cookies.get(ACCESS_TOKEN)) {
    return <Navigate to="/auth" />;
  }

  return <>Auth wrapper</>;
};

export default AuthWrapper;
