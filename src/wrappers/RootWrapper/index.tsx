import React, { useEffect } from 'react';
import Splash from 'components/Splash';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppState } from 'state';
import { RoutePath, SyncStatus } from 'types/enum';
import AuthPage from 'pages/AuthPage';
import AuthWrapper from 'wrappers/AuthWrapper';
import { useUpdateSync } from 'state/global/hooks';
import LoginPage from 'pages/LoginPage';
import SignUpPage from 'pages/SignUpPage';
import ForgotPasswordPage from 'pages/ForgotPasswordPage';

export default function RootWrapper() {
  const { sycStatus } = useSelector((state: AppState) => state.global);
  const updateSync = useUpdateSync();
  const navigate = useNavigate();

  useEffect(() => {
    if (sycStatus !== SyncStatus.COMPLETED) {
      const timeout = setTimeout(() => {
        updateSync(SyncStatus.COMPLETED);
        navigate(RoutePath.ROOT);
      }, 2000);

      return () => clearTimeout(timeout);
    }

    return;
  }, [sycStatus]);

  if (sycStatus !== SyncStatus.COMPLETED) {
    return <Splash syncStatus={sycStatus} />;
  }

  return (
    <div className="h-full relative  max-w-5xl mx-auto">
      {/* {sycStatus !== SyncStatus.COMPLETED && (
        <div className="fixed top-0 left-0 w-full h-full z-50">
          <Splash syncStatus={sycStatus} />
        </div>
      )} */}
      <Routes>
        <Route path={RoutePath.AUTH} element={<AuthPage />} />
        <Route path={RoutePath.FORGOT_PASSWORD} element={<ForgotPasswordPage />} />
        <Route path={RoutePath.LOGIN} element={<LoginPage />} />
        <Route path={RoutePath.SIGN_UP} element={<SignUpPage />} />
        <Route path={RoutePath.ROOT} element={<AuthWrapper />} />
      </Routes>
    </div>
  );
}
