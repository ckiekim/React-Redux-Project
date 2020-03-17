import { combineReducers } from 'redux';
import general from './general';
import month from './month';
import { penderReducer } from 'redux-pender';

export default combineReducers({
    general,
    month,
    pender: penderReducer
});