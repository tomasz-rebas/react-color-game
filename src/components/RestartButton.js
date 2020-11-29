import React from 'react';
import { resetScore, randomizeAllColors } from '../actions';
import { useDispatch } from 'react-redux';

export default function RestartButton() {

    const dispatch = useDispatch();

    return (
        <button 
            className="restart-button"
            onClick={() => {
                dispatch(randomizeAllColors());
                dispatch(resetScore());
            }}
        >
            Restart
        </button>
    )
}