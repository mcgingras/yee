import React from 'react';
import './App.css';
import cows from './cows.svg';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Vitamin Yee</h1>
          <audio controls src="http://192.168.1.205:8000/stream?type=.mp3" type="audio/mp3">
              your browser does not support the audio element. nerd.
          </audio>
        </div>
        <div>
          <img src={cows} />
        </div> 
      </header>
    </div>
  );
}

export default App;
