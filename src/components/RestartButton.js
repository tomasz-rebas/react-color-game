import React from 'react';
import { resetScore, randomizeAllColors } from '../actions';
import { useDispatch, useSelector } from 'react-redux';

export default function RestartButton() {

    const dispatch = useDispatch();
    const pointerEvents = useSelector(state => state.pointerEvents);

    const buttonStyle = {
        pointerEvents: pointerEvents
    }

    return (
        <button 
            className="restart-button"
            onClick={() => {
                dispatch(randomizeAllColors());
                dispatch(resetScore());
            }}
            style={buttonStyle}
        >
            Restart
        </button>
    )
}