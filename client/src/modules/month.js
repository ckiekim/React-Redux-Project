import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import axios from 'axios';
//import m3 from '../tmp/month202003';
//import m4 from '../tmp/month202004';

function getCalendarAPI(yearMonth) {
    return axios.get(`/api/calendar/${yearMonth}`);
}

const CHANGE_MONTH = 'CHANGE_MONTH';
const GET_CALENDAR = 'GET_CALENDAR';
export const changeMonth = createAction(CHANGE_MONTH);
export const getCalendar = createAction(GET_CALENDAR, getCalendarAPI);

const initialState = {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    monthData : null
}

export default handleActions({
    [CHANGE_MONTH]: (state, action) => {
        console.log(action.payload);
        const { year, month } = action.payload;
        return { ...state, year, month };
    },
    ...pender({
        type: GET_CALENDAR,
        onSuccess: (state, action) => {
            const monthData = action.payload.data;
            return { ...state, monthData }
        }
    })
}, initialState);