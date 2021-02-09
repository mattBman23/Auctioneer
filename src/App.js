import React from 'react';
import { Body } from './components/Body';
import { NavComp } from './components/NavComp';
import { AuthProvider } from './context/AuthContext';

export const App = () => {
  return (
    <AuthProvider>
      <NavComp />
      <Body />
    </AuthProvider>
  );
};
