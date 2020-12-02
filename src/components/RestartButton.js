import React from 'react';
import { resetScore, overwriteGrid } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import randomizeColors from '../functions/randomizeColors';

export default function RestartButton() {

    const dispatch = useDispatch();

    const pointerEvents = useSelector(state => state.pointerEvents);
    const grid = useSelector(state => state.grid);
    const colors = useSelector(state => state.colors);

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
                            grid.length,
                            grid[0].length,
                            colors.length
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