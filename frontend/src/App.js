import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/hello') // Will be proxied to localhost:8080
      .then(response => response.text())
      .then(data => setMessage(data));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{message || 'Loading...'}</h1>
    </div>
  );
}

export default App;
