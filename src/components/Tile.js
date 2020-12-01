import React from 'react';
import { useDispatch } from 'react-redux';
import { addToScore, overwriteGrid, disableButtons, enableButtons } from '../actions';
import { useSelector } from 'react-redux';
import findSequence from '../functions/findSequence';
import replaceTiles from '../functions/replaceTiles';
import settings from '../settings.json';

export default function Tile( { color, rowIndex, columnIndex } ) {

    const dispatch = useDispatch();
    const grid = useSelector(state => state.grid);
    const pointerEvents = useSelector(state => state.pointerEvents);

    const tileStyle = {
        backgroundColor: color,
        pointerEvents: pointerEvents
    }

    return (
        <div 
            style={tileStyle}
            className="tile"
            onClick={() => {
                const { modifiedGrid, score } = findSequence(grid, rowIndex, columnIndex);
                if (score > 0) {
                    dispatch(addToScore(score));
                    dispatch(overwriteGrid(modifiedGrid));
                    dispatch(disableButtons());
                    setTimeout(() => {   
                        dispatch(overwriteGrid(replaceTiles(modifiedGrid, settings.colors.length)));
                        dispatch(enableButtons());
                    }, 300);
                }
            }}
        ></div>
    )
}