import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/App';
import { createStore } from 'redux';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import getRandomColorIndexes from './functions/getRandomColorIndexes';

// initial state values
const colors = ['#e67300', '#0066ff', '#45c8fe', '#febb30', '#9933ff', '#00cc66', '#ff66cc'];
const colorSelected = '#660033';
const pointerEvents = 'auto';
const score = 0;

// grid initialization
const rowCount = 8;
const columnCount = 10;

let grid = [];
const colorIndexes = getRandomColorIndexes(colors.length, rowCount * columnCount);
let currentColorIndex = 0;

for (let i = 0; i < rowCount; i++) {
    let newRow = [];
    for (let j = 0; j < columnCount; j++) {
        newRow.push(colorIndexes[currentColorIndex]);
        currentColorIndex++;
    }
    grid.push(newRow);
}

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