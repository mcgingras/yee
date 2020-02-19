import React from 'react';
import './App.css';
import c2 from './c2.svg';
import MusicPlayer from './components/MusicPlayer';

function App() {

  return (
    <div>
      <div className="wrapper">
        <div className="bg">
            {/* <img src={c2} /> */}
        </div> 
        <div>
          <h6>Vitamin Yee Radio: Playlist Name </h6>
          <h1 className="border-text">pluko</h1>
          <h1>"I Want You"</h1> 
          <audio controls src="http://3.20.167.55:8000/stream" type="audio/mp3">
              your browser does not support the audio element. nerd.
          </audio>
          {/* <MusicPlayer /> */}
        </div>
      </div>
      <footer>
        <div>links</div>
        <div>
          <p className="footer--item">about</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
