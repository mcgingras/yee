import React from 'react';
import './App.css';
import cows from './cows.svg';

function App() {

  let audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  let audioElement = new Audio('http://192.168.1.205:8000/stream?type=.mp3'); // example stream
  let audioSrc = audioCtx.createMediaElementSource(audioElement);
  audioSrc.crossOrigin = 'anonymous';

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Vitamin Yee</h1>
          <p>The best online radio station to bring that yee back in your life. We broadcast whenever we feel like it.</p>
          <audio controls src="http://192.168.1.205:8000/stream?type=.mp3" type="audio/mp3" crossOrigin="anonymous">
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
