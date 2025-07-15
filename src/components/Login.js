import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'dummy' && password === 'dummy') {
      setError('');
      navigate('/home');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2 style={styles.heading}>Login</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        <button onClick={handleLogin} style={styles.button}>
          Login
        </button>

        {error && <p style={styles.error}>{error}</p>}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#f0f2f5',
  },
  box: {
    padding: '30px',
    borderRadius: '8px',
    backgroundColor: 'white',
    boxShadow: '0 0 15px rgba(0,0,0,0.1)',
    width: '300px',
    textAlign: 'center',
  },
  heading: {
    marginBottom: '20px',
  },
  input: {
    display: 'block',
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '14px',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#4CAF50',
    border: 'none',
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '4px',
  },
  error: {
    color: 'red',
    marginTop: '10px',
    fontSize: '14px',
  },
};

export default Login;
