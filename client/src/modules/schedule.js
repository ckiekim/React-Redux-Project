import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import axios from 'axios';
const qs = require('querystring');

function postScheduleAPI(formData) {
    //console.log(formData);
    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }
    return axios.post('/api/schedule', qs.stringify(formData), config);
}

const CHANGE_FLAG = 'CHANGE_FLAG';
const ADD_SCHEDULE = 'ADD_SCHEDULE';
export const changeFlag = createAction(CHANGE_FLAG);
export const addSchedule = createAction(ADD_SCHEDULE, postScheduleAPI);

const initialState = {
    flag: false
    /* formData: {
        title: '', 
        option: false, 
        startDay: new Date(), 
        startTime: '',
        endDay: null, 
        endTime: '', 
        place: '', 
        memo: ''
    } */
}

export default handleActions({
    [CHANGE_FLAG]: (state, action) => {
        //console.log(action.payload);
        return { ...state, flag:true };
    },
    ...pender({
        type: ADD_SCHEDULE,
        onSuccess: (state, action) => {
            return { ...state }
        }
    })
}, initialState);