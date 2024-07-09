import React from 'react';
import { useNavigate } from 'react-router-dom';
import { jwt_decode } from './jwtDecode';

const AuthChecker = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  if (!token) {
    navigate('/login');
    return null;
  }

  try {
    const decoded = jwt_decode(token);
    const currentTime = Date.now() / 1000;
    if (decoded.exp && decoded.exp < currentTime) {
      localStorage.removeItem('token');
      navigate('/login');
      return null;
    }
  } catch (e) {
    localStorage.removeItem('token');
    navigate('/login');
    return null;
  }

  return children;
};

export default AuthChecker;
