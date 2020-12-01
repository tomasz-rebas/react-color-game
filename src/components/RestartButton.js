import React from 'react';
import { resetScore, overwriteGrid } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import randomizeColors from '../functions/randomizeColors';
import settings from '../settings.json';

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
                dispatch(
                    overwriteGrid(
                        randomizeColors(
                            settings.rows,
                            settings.columns,
                            settings.colors.length
                        )
                ));
                dispatch(resetScore());
            }}
            style={buttonStyle}
        >
            Restart
        </button>
    )
}