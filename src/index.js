import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bulma/css/bulma.css';
import './styles.scss';

//todays imports
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import { reducer } from '../src/reducers/reducers'

export const store = createStore(reducer);



const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>
, rootElement);
