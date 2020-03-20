import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import axios from 'axios';

function getDateAPI(fullDay) {
    return axios.get(`/api/day/${fullDay}`);
}

const CHANGE_DATE = 'CHANGE_DATE';
const GET_DATE = 'GET_DATE';
export const changeDate = createAction(CHANGE_DATE);
export const getDate = createAction(GET_DATE, getDateAPI);

const initialState = {
    dateRefresh: false,
    date: new Date().toISOString().substring(0, 10).replace(/-/g,''),
    dayData : null
}

export default handleActions({
    [CHANGE_DATE]: (state, action) => {
        //console.log(action.payload);
        return { ...state, dateRefresh:true, date:action.payload };
    },
    ...pender({
        type: GET_DATE,
        onSuccess: (state, action) => {
            const dayData = action.payload.data;
            return { ...state, dateRefresh:false, dayData }
        }
    })
}, initialState);