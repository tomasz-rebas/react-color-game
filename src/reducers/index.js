import scoreReducer from './score';
import gridReducer from './grid';
import pointerEventsReducer from './pointerEvents';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    score: scoreReducer,
    grid: gridReducer,
    pointerEvents: pointerEventsReducer
})

export default rootReducer;