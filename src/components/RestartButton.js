import React from 'react';
import { resetScore } from '../actions/score';
import { overwriteAllTiles } from '../actions/grid';
import { useDispatch, useSelector } from 'react-redux';
import getRandomColorIndexes from '../functions/getRandomColorIndexes';

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
                    overwriteAllTiles(
                        getRandomColorIndexes(colors.length, grid[0].length * grid.length)
                ));
                dispatch(resetScore());
            }}
            style={buttonStyle}
        >
            Restart
        </button>
    )
}