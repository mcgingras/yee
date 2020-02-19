import React, {useState} from 'react';
import './App.css';
import c2 from './c2.svg';
import MusicPlayer from './components/MusicPlayer';

function App() {

  let [playing, setPlaying] = useState("Filler Artist Here")
  let [isLive, setLive] = useState(true);

  return (
    <div>
      <div className="wrapper">
        <div className="bg hide--mobile">
            {/* <img src={c2} /> */}
        </div> 
        <div>
          <h6>{isLive ? 'Vitamin Yee Radio: Playlist Name' : 'Next Show: 2:10:34:22'}</h6>
          <h1 className="border-text">{isLive ? playing : "Vitamin Yee"}</h1>
          <h1>{isLive ? 'song title' : "Is Offline"}</h1> 
          {/* <audio controls src="http://3.20.167.55:8000/stream" type="audio/mp3">
              your browser does not support the audio element. nerd.
          </audio> */}
          {isLive ? <MusicPlayer /> : <p>see past playlists</p>}
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
