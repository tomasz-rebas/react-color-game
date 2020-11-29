import React from 'react';
import '../style.css';
import Grid from './Grid';
import Score from './Score';
import RestartButton from './RestartButton';

export default function App() {
    return (
        <div>
            <h1>Color Game</h1>
            <Grid/>
            <div className="bottom-section">
                <Score/>
                <RestartButton/>
            </div>
        </div>
    )
}