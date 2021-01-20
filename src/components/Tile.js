import React from 'react';
import { useDispatch } from 'react-redux';
import { findSequence, replaceEmptyTiles } from '../actions/grid';
import { addToScore } from '../actions/score';
import { disableButtons, enableButtons } from '../actions/pointerEvents';
import { useSelector } from 'react-redux';
import countEmptyTiles from '../functions/countEmptyTiles';
import getRandomColorIndexes from '../functions/getRandomColorIndexes';

export default function Tile( { color, rowIndex, columnIndex } ) {

    const dispatch = useDispatch();

    const grid = useSelector(state => state.grid);
    const pointerEvents = useSelector(state => state.pointerEvents);
    const colors = useSelector(state => state.colors);

    const tileStyle = {
        backgroundColor: color,
        pointerEvents: pointerEvents
    }

    return (
        <div 
            style={tileStyle}
            className="tile"
            onClick={() => {
                
                dispatch(findSequence({
                    rowRootIndex: rowIndex,
                    columnRootIndex: columnIndex
                }));

                const newScorePoints = countEmptyTiles(grid);

                if (newScorePoints > 1) {     
                    dispatch(addToScore(newScorePoints));
                    dispatch(disableButtons());
                    setTimeout(() => {   
                        dispatch(replaceEmptyTiles(getRandomColorIndexes(colors.length, newScorePoints)));
                        dispatch(enableButtons());
                    }, 300);
                }
            }}
        ></div>
    )
}