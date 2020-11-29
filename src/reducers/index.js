import scoreReducer from './score';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    score: scoreReducer
})

export default rootReducer;