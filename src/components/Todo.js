import { useState } from 'react';

function Todo({ onBack, tasks, setTasks }) {
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div style={styles.container}>
      <button onClick={onBack} style={styles.homeButton}>🏠 Home</button>
      <h3 style={styles.heading}>To-Do List</h3>

      <div style={styles.form}>
        <input
          type="text"
          placeholder="Enter new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={styles.input}
        />
        <button onClick={addTask} style={styles.addButton}>Add</button>
      </div>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Task</th>
            <th style={styles.th}>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((t, i) => (
            <tr key={i}>
              <td style={styles.td}>{t}</td>
              <td style={styles.td}>
                <button onClick={() => deleteTask(i)} style={styles.deleteButton}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  heading: {
    marginBottom: '20px',
  },
  form: {
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
  },
  input: {
    padding: '10px',
    width: '250px',
    fontSize: '14px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  addButton: {
    padding: '10px 15px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  th: {
    borderBottom: '1px solid #ccc',
    padding: '10px',
    backgroundColor: '#f9f9f9',
  },
  td: {
    padding: '10px',
  },
  deleteButton: {
    padding: '5px 10px',
    backgroundColor: '#f44336',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  homeButton: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    padding: '8px 12px',
    backgroundColor: '#2196F3',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Todo;
