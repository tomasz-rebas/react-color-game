import scoreReducer from './score';
import gridReducer from './grid';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    score: scoreReducer,
    grid: gridReducer
})

export default rootReducer;