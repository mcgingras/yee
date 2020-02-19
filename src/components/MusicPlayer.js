import React, {useState} from 'react';

export default function MusicPlayer(){

    let [isPlaying, setPlaying] = useState(false);

    const URL = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/Yodel_Sound_Effect.mp3';
    const context = new AudioContext();
    let yodelBuffer;
    
    fetch("http://3.20.167.55:8000/stream")
    .then(response => response.body)
    .then(body => {
        const reader = body.getReader();
        console.log(reader);
        
        let pump = () => {
            reader.read().then(({value, done}) => {
                // console.log(typeof(value));
                // console.log(value);
                
                toAudioContext(value.buffer);
                if(!done) pump()
            })
        }
        pump()
    })

    const toAudioContext = (arrayBuffer) => {
        context.decodeAudioData(arrayBuffer)
        .then(audioBuffer => {
            const source = context.createBufferSource();
            source.buffer = audioBuffer;
            source.connect(context.destination);
            source.start();
        })
    }


    // fetch(URL)
    // .then(response => response.arrayBuffer())
    // .then(arrayBuffer => context.decodeAudioData(arrayBuffer))
    // .then(audioBuffer => {;
    //     yodelBuffer = audioBuffer;
    // });
        
    function play(audioBuffer) {
        const source = context.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(context.destination);
        source.start();
    }

    const toggleAudio = () => {
        play(yodelBuffer);
        console.log(yodelBuffer);
        
    }

    return (
        <div className="player--wrapper">
            <span className="player--play" onClick={() => {toggleAudio()}}></span>
            <div className="player--track">
                <span className="player--current"></span>
            </div>
            <span>0:00:00</span>
        </div>
    )
}