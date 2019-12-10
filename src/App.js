import React from 'react';
import './App.css';
import cows from './cows.svg';
import boys from './boys.svg';

import NavItem from './components/navItem';

function App() {

  return (
    <div className="wrapper">
        <div className="grid">
          <div className="grid--header">
           <h1 className="title">Vitamin Yee</h1>
          </div>
            <NavItem title="playlists" body="no playlists yet" />
            <NavItem title="best yee" body="Best Yee of the Week goes to Austin, for blowing up balloons and giving the house much more yee than necessary." />
            <NavItem title="reviews" body="no reviews yet" />
            <NavItem title="about" body="Vitamin Yee is a weekly online radio show hosted by Austin & Michael. We play great hits and tell really funny jokes. Enjoy responsibly." />
          {/* <audio controls src="http://192.168.1.205:8000/stream" type="audio/mp3" crossOrigin="anonymous">
              your browser does not support the audio element. nerd.
          </audio> */}
        </div>
        <div>
          <img src={boys} />
        </div> 
    </div>
  );
}

export default App;
