import { handleActions, createAction } from 'redux-actions';
import d16 from '../tmp/day20200316';
import d17 from '../tmp/day20200317';

const CHANGE_DATE = 'CHANGE_DATE';
const CREATE_PROC = 'CREATE_PROC';

export const changeDate = createAction(CHANGE_DATE);
export const createProc = createAction(CREATE_PROC);

const initialState = {
    mode: 'READ',
    today: new Date().toISOString().substring(0, 10),
    badgeContent: 3,
    dayData: new Date().getDay()%2 === 0 ? d16.dayData : d17.dayData,
    formData: {
        title: '', option: false, startDay: new Date(), startTime: '',
        endDay: null, endTime: '', place: '', desc: ''
    }
};

export default handleActions({
    [CHANGE_DATE]: (state, action) => {
        let day = parseInt(action.fullDay);
        let dayData = day%2 === 0 ? d16.dayData : d17.dayData;
        return {...state, mode:'READ', dayData};
    },
    [CREATE_PROC]: (state, action) => {
        let formData = action.formData;
        return {...state, mode:'READ', formData};
    }
}, initialState);