import React, {useRef, useEffect} from 'react';
import './App.css';
import sb from './sb2.gif';

function App() {
  let audio = useRef(null);

  useEffect(() => {
    console.log(audio.current.error);
  }, [])

  const getAudio = () => {
    if(audio.current.error){
      console.log(audio.current.error);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>YEEEEEEEEEEEE!!!!!!!</h1>
        <img src={sb} />
        <p onClick={() => {getAudio()}}>(spoons rattling)</p>
        <audio ref={audio} controls src="http://192.168.1.205:8000/stream?type=.mp3" type="audio/mpeg">
            your browser does not support the audio element. nerd.
        </audio>
      </header>
    </div>
  );
}

export default App;
