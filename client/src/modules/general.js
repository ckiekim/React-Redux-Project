import { handleActions, createAction } from 'redux-actions';

const CHANGE_BADGE = 'CHANGE_BADGE';

export const changeBadge = createAction(CHANGE_BADGE);

const initialState = {
    mode: 'READ',
    today: new Date().toISOString().substring(0, 10),
    badgeContent: 3,
};

export default handleActions({
    [CHANGE_BADGE]: (state, action) => {
        return { ...state, badgeContent:action.payload };
    }
}, initialState);