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
function patchScheduleAPI(formData) {
    let sid = formData.sid;
    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }
    return axios.patch(`/api/schedule/${sid}`, qs.stringify(formData), config);
}
function deleteScheduleAPI(sid) {
    return axios.delete(`/api/schedule/${sid}`);
}

const SET_LIST_REFRESH = 'SET_LIST_REFRESH';
const GET_SCHEDULE_LIST = 'GET_SCHEDULE_LIST';
const ADD_SCHEDULE = 'ADD_SCHEDULE';
const UPDATE_SCHEDULE = 'UPDATE_SCHEDULE';
const DELETE_SCHEDULE = 'DELETE_SCHEDULE';
export const setListRefresh = createAction(SET_LIST_REFRESH);
export const getScheduleList = createAction(GET_SCHEDULE_LIST, getScheduleListAPI);
export const addSchedule = createAction(ADD_SCHEDULE, postScheduleAPI);
export const updateSchedule = createAction(UPDATE_SCHEDULE, postScheduleAPI);
export const deleteSchedule = createAction(DELETE_SCHEDULE, deleteScheduleAPI);

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
    }),
    ...pender({
        type: UPDATE_SCHEDULE,
        onSuccess: (state, action) => {
            return { ...state, listRefresh:true }
        }
    }),
    ...pender({
        type: DELETE_SCHEDULE,
        onSuccess: (state, action) => {
            return { ...state, listRefresh:true }
        }
    })
}, initialState);