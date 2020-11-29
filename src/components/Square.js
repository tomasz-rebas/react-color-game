import React from 'react';
import { useDispatch } from 'react-redux';
import { addToScore } from '../actions';

export default function Square( { color } ) {

    const dispatch = useDispatch();

    const squareStyle = {
        backgroundColor: color
    }

    return (
        <div 
            style={squareStyle}
            className="square"
            onClick={() => dispatch(addToScore(3))}
        ></div>
    )
}