import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Alert } from 'react-bootstrap';
import logoImg from '../images/logo.png';
import { LoginForm } from './LoginForm';
import { SignupForm } from './SignupForm';

export const NavComp = () => {
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState('');

  const handleLogout = async () => {
    try {
      await logout();
    } catch {
      setError('Failed to logout');
    }
  };

  return (
    <nav className="container navbar sticky-top navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logoImg} alt="logo" height="75" />
        </a>
        <div className="d-flex">
          <div className="col">
            {currentUser ? (
              <>
                <div className="btn btn-outline-secondary mx-2">
                  {currentUser.email}
                </div>
                <div
                  onClick={handleLogout}
                  className="btn btn-outline-secondary mx-2"
                >
                  Logout
                </div>
              </>
            ) : (
              <>
                <LoginForm />
                <SignupForm />
              </>
            )}
          </div>
        </div>
      </div>
      {error && <Alert variant="danger">{error}</Alert>}
    </nav>
  );
};
