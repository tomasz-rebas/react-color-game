import React from 'react';
import Tile from './Tile';
import { useSelector } from 'react-redux';

export default function Grid() {

    const grid = useSelector(state => state.grid);
    const colors = useSelector(state => state.colors);
    const colorSelected = useSelector(state => state.colorSelected);

    const gridStyle = {
        gridTemplateColumns: `repeat(${grid[0].length}, minmax(30px, 60px)`,
        gridTemplateRows: `repeat(${grid.length}, minmax(30px, 60px)`
    }

    let buttons = [];
    let i = 0;

    grid.forEach((row, rowIndex) => {
        row.forEach((colorIndex, columnIndex) => {
            let buttonColor;
            if (colorIndex >= 0) {
                buttonColor = colors[colorIndex];
            } else {
                buttonColor = colorSelected;
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