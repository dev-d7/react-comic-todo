import { useEffect, useState } from 'react';

function Xkcd({ onBack }) {
  const [imgUrl, setImgUrl] = useState('');
  const [error, setError] = useState('');

  const fetchComic = async () => {
    const maxNum = 2800;
    const random = Math.floor(Math.random() * maxNum) + 1;
    const proxy = 'https://api.allorigins.win/raw?url=';
    const url = `https://xkcd.com/${random}/info.0.json`;

    try {
      const res = await fetch(proxy + encodeURIComponent(url));
      const data = await res.json();
      setImgUrl(data.img);
      setError('');
    } catch (err) {
      setError('Failed to load comic. Please try again.');
    }
  };

  useEffect(() => {
    fetchComic();
  }, []);

  return (
    <div style={styles.container}>
      <button onClick={onBack} style={styles.homeButton}>🏠 Home</button>
      <h3 style={styles.heading}>Random XKCD Comic</h3>

      <div style={styles.buttonWrapper}>
        <button onClick={fetchComic} style={styles.button}>Get Another</button>
      </div>

      {error && <p style={styles.error}>{error}</p>}

      <div style={styles.imageContainer}>
        {imgUrl && <img src={imgUrl} alt="XKCD" style={styles.img} />}
      </div>
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
    position: 'relative',
  },
  heading: {
    marginBottom: '20px',
  },
  buttonWrapper: {
    marginBottom: '20px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    border: 'none',
    color: 'white',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
  },
  imageContainer: {
    height: '400px', // Fixed height to prevent layout shift
    overflow: 'auto',
    border: '1px solid #ddd',
    padding: '10px',
    borderRadius: '6px',
    backgroundColor: '#fafafa',
  },
  img: {
    maxWidth: '100%',
    height: 'auto',
    display: 'block',
    margin: '0 auto',
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

export default Xkcd;
