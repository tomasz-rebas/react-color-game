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
    let i = 0;

    grid.forEach(row => {
        row.forEach(colorIndex => {
            if (colorIndex >= 0) {
                buttons.push(<Square color={settings.colors[colorIndex]} key={i}/>);
            } else {
                buttons.push(<Square color="#d700d6" key={i}/>);
            }
            i++;
        })
    });

    return (
        <div style={gridStyle} className="game-grid">
            {buttons}
        </div>
    )
}