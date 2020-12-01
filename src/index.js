import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/App';
import { createStore } from 'redux';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import randomizeColors from './functions/randomizeColors';
import settings from './settings.json';

const initialState = {
    grid: randomizeColors(
        settings.rows,
        settings.columns,
        settings.colors.length
    )
}

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