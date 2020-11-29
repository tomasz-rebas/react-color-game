import React from 'react';
import { reset, randomizeAll } from '../actions';
import { useDispatch } from 'react-redux';

export default function RestartButton() {

    const dispatch = useDispatch();

    return (
        <button 
            className="restart-button"
            onClick={() => {
                dispatch(randomizeAll());
                dispatch(reset());
            }}
        >
            Restart
        </button>
    )
}