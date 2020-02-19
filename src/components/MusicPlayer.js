import React from 'react';

export default function MusicPlayer(){

    return (
        <div className="player--wrapper">
            <span className="player--play"></span>
            <div className="player--track">
                <span className="player--current"></span>
            </div>
            <span>0:00:00</span>
        </div>
    )
}