import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminAuth.css'; // Apni theme ki styling

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://127.0.0.1:8000/api-token-auth/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem('adminToken', data.token);
        navigate('/crm');
      } else {
        setError('Invalid Admin Credentials');
      }
    } catch {
      setError('Server connection failed');
    }
  };

  return (
    <div className="admin-login-container">
      <form onSubmit={handleLogin} className="admin-login-card">
        <h2>CEP Admin Portal</h2>
        {error && <p className="error-msg">{error}</p>}
        <div className="form-group">
          <label>Username</label>
          <input type="text" value={username} onChange={e => setUsername(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="btn-primary">Secure Login</button>
      </form>
    </div>
  );
}