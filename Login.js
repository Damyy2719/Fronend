import React, { useState } from 'react';
import './Login.css';
import { jwt_decode } from './jwtDecode';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = () => {
    setLoading(true);
    setError(null);

    setTimeout(() => {
      if (username === 'admin' && password === 'password') {
        const token = 'fake-jwt-token';
        localStorage.setItem('token', token);
        const decoded = jwt_decode(token);
        console.log(decoded);
        setLoading(false);
        navigate('/');
      } else {
        setError('Error al iniciar sesión');
        setLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="login-container">
      <h1>Iniciar Sesión</h1>
      <div className="input-group">
        <label>Usuario</label>
        <input
          type="text"
          placeholder="Escribe tu usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Contraseña</label>
        <input
          type="password"
          placeholder="Escribe tu contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin} disabled={loading}>
        {loading ? 'Cargando...' : 'Iniciar Sesión'}
      </button>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Login;
