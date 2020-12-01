import React from 'react';
import Tile from './Tile';
import settings from '../settings.json';
import { useSelector } from 'react-redux';

export default function Grid() {

    const grid = useSelector(state => state.grid);

    const gridStyle = {
        gridTemplateColumns: `repeat(${settings.columns}, minmax(${settings.tileMinSize}, ${settings.tileMaxSize})`,
        gridTemplateRows: `repeat(${settings.rows}, minmax(${settings.tileMinSize}, ${settings.tileMaxSize})`
    }

    let buttons = [];
    let i = 0;

    grid.forEach((row, rowIndex) => {
        row.forEach((colorIndex, columnIndex) => {
            let buttonColor;
            if (colorIndex >= 0) {
                buttonColor = settings.colors[colorIndex];
            } else {
                buttonColor = '#d700d6';
            }
            buttons.push(
                <Tile 
                    color={buttonColor}
                    key={i}
                    rowIndex={rowIndex}
                    columnIndex={columnIndex}
                />
            );
            i++;
        })
    });

    return (
        <div style={gridStyle} className="game-grid">
            {buttons}
        </div>
    )
}