import React, {useState, useEffect} from 'react';
import './App.css';

const API_URL = 'https://api.icndb.com/jokes/random/';


function App() {

  const [joke, setJoke] = useState('');

  const newJoke = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setJoke(data.value.joke));
  };

  useEffect(() => {
    newJoke();
  }, []);

  return (
    <div className="App">
      <div className="box">
        <div className="box-inner">
          <h3>Chuck Norris Joke Generator</h3>
          <p id="jokes">{joke}</p>
          <button onClick={newJoke}>Generate New Joke</button>
        </div>
      </div>
    </div>
  );
}

export default App;
