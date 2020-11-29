import React from 'react';
import Square from './Square';
import settings from '../settings.json';
import { useSelector } from 'react-redux';

export default function Grid() {

    const grid = useSelector(state => state.grid);

    const gridStyle = {
        gridTemplateColumns: `repeat(${settings.columns}, ${settings.squareSize})`,
        gridTemplateRows: `repeat(${settings.rows}, ${settings.squareSize})`
    }

    let buttons = [];

    // for (let i = 0; i < settings.rows * settings.columns; i++) {
    //     const randomColor = settings.colors[Math.floor(Math.random() * settings.colors.length)];
    //     buttons.push(<Square color={randomColor}/>);
    // }

    // for (let i = 0; i < grid.length; i++) {
    //     buttons.push(<Square color={randomColor}/>);
    // }

    grid.forEach(row => {
        row.forEach(colorIndex => {
            buttons.push(<Square color={settings.colors[colorIndex]}/>);
        })
    });

    return (
        <div style={gridStyle} className="game-grid">
            {buttons}
        </div>
    )
}