import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import axios from 'axios';

function getCalendarAPI(yearMonth) {
    return axios.get(`/api/calendar/${yearMonth}`);
}

const SET_REFRESH = 'SET_REFRESH';
const CHANGE_MONTH = 'CHANGE_MONTH';
const GET_CALENDAR = 'GET_CALENDAR';
export const setRefresh = createAction(SET_REFRESH);
export const changeMonth = createAction(CHANGE_MONTH);
export const getCalendar = createAction(GET_CALENDAR, getCalendarAPI);

const initialState = {
    monthRefresh: false,
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    monthData : null
}

export default handleActions({
    [SET_REFRESH]: (state, action) => {
        return { ...state, monthRefresh:true }
    },
    [CHANGE_MONTH]: (state, action) => {
        console.log(action.payload);
        const { year, month } = action.payload;
        return { ...state, monthRefresh:true, year, month };
    },
    ...pender({
        type: GET_CALENDAR,
        onSuccess: (state, action) => {
            const monthData = action.payload.data;
            return { ...state, monthRefresh:false, monthData }
        }
    })
}, initialState);