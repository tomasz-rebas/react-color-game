import React from 'react';
import { useDispatch } from 'react-redux';
import { addToScore, overwriteGrid } from '../actions';
import { useSelector } from 'react-redux';
import findSequence from '../functions/findSequence';

export default function Square( { color, rowIndex, columnIndex } ) {

    const dispatch = useDispatch();
    const grid = useSelector(state => state.grid);

    const squareStyle = {
        backgroundColor: color
    }

    return (
        <div 
            style={squareStyle}
            className="square"
            onClick={() => {
                dispatch(addToScore(3));
                dispatch(overwriteGrid(findSequence(grid, rowIndex, columnIndex)))
            }}
        ></div>
    )
}