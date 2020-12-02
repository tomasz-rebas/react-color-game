import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/App';
import { createStore } from 'redux';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import randomizeColors from './functions/randomizeColors';

// grid dimensions
const rowCount = 8;
const columnCount = 10;

// initial state values
const colors = [
    "#e67300",
    "#1758b8",
    "#45c8fe",
    "#febb30",
    "#6e75f8"
];
const colorSelected = '#d700d6';
const grid = randomizeColors(
    rowCount, columnCount, colors.length
);
const pointerEvents = 'auto';
const score = 0;

// state initialization
const initialState = { colors, colorSelected, grid, pointerEvents, score }
const store = createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)