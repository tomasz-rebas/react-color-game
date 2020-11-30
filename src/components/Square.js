import React from 'react';
import { useDispatch } from 'react-redux';
import { addToScore, overwriteGrid, disableButtons, enableButtons } from '../actions';
import { useSelector } from 'react-redux';
import findSequence from '../functions/findSequence';
import replaceSquares from '../functions/replaceSquares';
import settings from '../settings.json';

export default function Square( { color, rowIndex, columnIndex } ) {

    const dispatch = useDispatch();
    const grid = useSelector(state => state.grid);
    const pointerEvents = useSelector(state => state.pointerEvents);

    const squareStyle = {
        backgroundColor: color,
        pointerEvents: pointerEvents
    }

    return (
        <div 
            style={squareStyle}
            className="square"
            onClick={() => {
                const { modifiedGrid, score } = findSequence(grid, rowIndex, columnIndex);
                dispatch(addToScore(score));
                dispatch(overwriteGrid(modifiedGrid));
                dispatch(disableButtons());
                setTimeout(() => {   
                    dispatch(overwriteGrid(replaceSquares(modifiedGrid, settings.colors.length)));
                    dispatch(enableButtons());
                }, 300);
            }}
        ></div>
    )
}