import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        this is the yeecast, thank you for listening.
        <audio controls src="http://192.168.1.205:8000/stream?type=.mp3" type="audio/mpeg">
            your browser does not support the audio element. nerd.
        </audio>
      </header>
    </div>
  );
}

export default App;
