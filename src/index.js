import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import {createLogger} from 'redux-logger'
import './index.css';
import App from './App';
import {rootReducer, rootEpic} from './root'
import registerServiceWorker from './registerServiceWorker';

const loggerMiddleware = createLogger({collapsed: true})
const epicMiddleware = createEpicMiddleware()
const store = createStore(
    rootReducer,
    applyMiddleware(epicMiddleware, loggerMiddleware)
)

epicMiddleware.run(rootEpic)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
