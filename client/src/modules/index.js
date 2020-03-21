import { combineReducers } from 'redux';
import general from './general';
import month from './month';
import date from './date';
import schedule from './schedule';
import { penderReducer } from 'redux-pender';

export default combineReducers({
    general,
    month,
    date,
    schedule,
    pender: penderReducer
});