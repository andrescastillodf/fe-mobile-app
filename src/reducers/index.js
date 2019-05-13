import {combineReducers} from 'redux';
import phones from './phoneReducer';

const rootReducer = combineReducers({
    phones
});

export default rootReducer;