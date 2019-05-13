import  'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import {loadPhones} from './actions/phoneActions';
import './styles/styles.css'; //Webpack can import css files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
require ('bootstrap');

const store = configureStore();

render (
    <Provider store={store}> 
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);