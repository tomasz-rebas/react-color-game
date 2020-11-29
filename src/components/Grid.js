import React from 'react';
import Square from './Square';
import settings from '../settings.json';

export default function Grid() {

    const gridStyle = {
        gridTemplateColumns: `repeat(${settings.columns}, ${settings.squareSize})`,
        gridTemplateRows: `repeat(${settings.rows}, ${settings.squareSize})`
    }

    let buttons = [];

    for (let i = 0; i < settings.rows * settings.columns; i++) {
        const randomColor = settings.colors[Math.floor(Math.random() * settings.colors.length)];
        buttons.push(<Square color={randomColor}/>);
    }

    return (
        <div style={gridStyle} className="game-grid">
            {buttons}
        </div>
    )
}