import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './Login';
import AuthChecker from './AuthChecker';

const Root = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<AuthChecker><App /></AuthChecker>} />
      <Route path="*" element={<AuthChecker><App /></AuthChecker>} />
    </Routes>
  </Router>
);

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
