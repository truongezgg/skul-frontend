import Cookies from 'js-cookie';
import AuthPage from 'pages/AuthPage';
import SetupPinPage from 'pages/SetupPinPage';
import React, { useEffect } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { RoutePath } from 'types/enum';
import { ACCESS_TOKEN } from 'utils/axios';

const AuthWrapper = () => {
  const navigate = useNavigate();
  // if (!Cookies.get(ACCESS_TOKEN)) {
  //   return <Navigate to="/auth" />;
  // }

  // useEffect(() => {
  //   navigate(RoutePath.SETUP_PIN);
  // });
  return (
    <>
      <Routes>
        <Route path={RoutePath.SETUP_PIN} element={<SetupPinPage />} />
        <Route path={'/*'} element={<AuthPage />} />
      </Routes>
    </>
  );
};

export default AuthWrapper;
