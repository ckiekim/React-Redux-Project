import { combineReducers } from 'redux';
import general from './general';
import month from './month';
import date from './date';
import { penderReducer } from 'redux-pender';

export default combineReducers({
    general,
    month,
    date,
    pender: penderReducer
});