import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import axios from 'axios';
const qs = require('querystring');

function getScheduleListAPI(fromDay) {
    return axios.get(`/api/scheduleList/${fromDay}`);
}
function postScheduleAPI(formData) {
    //console.log(formData);
    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }
    return axios.post('/api/schedule', qs.stringify(formData), config);
}

const SET_LIST_REFRESH = 'SET_LIST_REFRESH';
const GET_SCHEDULE_LIST = 'GET_SCHEDULE_LIST';
const ADD_SCHEDULE = 'ADD_SCHEDULE';
export const setListRefresh = createAction(SET_LIST_REFRESH);
export const getScheduleList = createAction(GET_SCHEDULE_LIST, getScheduleListAPI);
export const addSchedule = createAction(ADD_SCHEDULE, postScheduleAPI);

const initialState = {
    listRefresh: false,
    scheduleList: null
}

export default handleActions({
    [SET_LIST_REFRESH]: (state, action) => {
        return { ...state, listRefresh:true };
    },
    ...pender({
        type: GET_SCHEDULE_LIST,
        onSuccess: (state, action) => {
            const scheduleList = action.payload.data;
            //console.log(action.payload);
            return { ...state, listRefresh:false, scheduleList }
        }
    }),
    ...pender({
        type: ADD_SCHEDULE,
        onSuccess: (state, action) => {
            return { ...state, listRefresh:true }
        }
    })
}, initialState);