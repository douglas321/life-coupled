import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    fetch('http://localhost:8080/api/hello')
      .then(res => res.text())
      .then(setMessage)
      .catch(err => setMessage('Error: ' + err.message));
  }, []);

  return <h1>{message}</h1>;
}

export default App;