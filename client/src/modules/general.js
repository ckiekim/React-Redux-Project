import { handleActions, createAction } from 'redux-actions';

const CHANGE_MODE = 'CHANGE_MODE';
const SET_TODAY = 'SET_TODAY';
const CHANGE_BADGE = 'CHANGE_BADGE';

export const changeMode = createAction(CHANGE_MODE);
export const setToday = createAction(SET_TODAY);
export const changeBadge = createAction(CHANGE_BADGE);

const initialState = {
    mode: 'GRID',
    today: new Date().toISOString().substring(0, 10),
    badgeContent: 3,
};

export default handleActions({
    [CHANGE_MODE]: (state, action) => {
        console.log(action.payload);
        let mode = action.payload;
        return { ...state, mode };
    },
    [SET_TODAY]: (state, action) => {
        console.log('setToday()', action.payload);
        let today = action.payload;
        return { ...state, today };
    },
    [CHANGE_BADGE]: (state, action) => {
        return { ...state, badgeContent:action.payload };
    }
}, initialState);