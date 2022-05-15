import React from 'react';
import Splash from 'components/Splash';
import { Route, Routes } from 'react-router-dom';

export default function RootWrapper() {
  return (
    <div className="h-full relative mx-auto">
      <Routes>
        <Route path="/login" element={<div>Login</div>} />
        <Route path="/splash" element={<Splash />} />
        <Route path="/*" element={<Splash />} />
      </Routes>
    </div>
  );
}
