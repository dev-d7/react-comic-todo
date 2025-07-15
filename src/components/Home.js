import { useState } from 'react';
import Todo from './Todo';
import Xkcd from './Comic';

function Home() {
  const [tab, setTab] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleBackToHome = () => setTab('');

  return (
    <div style={styles.container}>
      {tab === '' && (
        <div style={styles.box}>
          <h2 style={styles.heading}>Welcome!</h2>

          <div style={styles.buttonContainer}>
            <button style={styles.button} onClick={() => setTab('todo')}>📋 To-Do List</button>
            <button style={styles.button} onClick={() => setTab('xkcd')}>🎭 Random Comic</button>
          </div>
        </div>
      )}

      {tab === 'todo' && (
        <div style={styles.content}>
          <Todo tasks={tasks} setTasks={setTasks} onBack={handleBackToHome} />
        </div>
      )}

      {tab === 'xkcd' && (
        <div style={styles.content}>
          <Xkcd onBack={handleBackToHome} />
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    background: '#f0f2f5',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  box: {
    backgroundColor: 'white',
    padding: '40px',
    borderRadius: '8px',
    boxShadow: '0 0 15px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  heading: {
    marginBottom: '30px',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    alignItems: 'center',
  },
  button: {
    width: '200px',
    padding: '12px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#4CAF50',
    color: 'white',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  content: {
    width: '100%',
    maxWidth: '800px',
    margin: '0 auto',
  },
};

export default Home;
