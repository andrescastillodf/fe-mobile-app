import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import PhonesListContainer from './components/phone/PhonesListContainer';
import PhoneDetailContainer from './components/phone/PhoneDetailContainer';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="phones" component={PhonesListContainer}/>
        <Route path="phone/:id" component={PhoneDetailContainer}/>
    </Route>
);
