import { combineReducers } from 'redux';
import general from './general';
import month from './post';
import { penderReducer } from 'redux-pender';

export default combineReducers({
    general,
    month,
    pender: penderReducer
});