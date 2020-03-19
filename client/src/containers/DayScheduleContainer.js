import DaySchedule from '../components/DaySchedule';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as dateActions from '../modules/date';

export default connect(
    (state) => ({
        date: state.date.date,
        dayData: state.date.dayData,
        loading: state.pender.pending['GET_DATE'],
        error: state.pender.failure['GET_DATE']
    }),
    (dispatch) => ({
        DateActions: bindActionCreators(dateActions, dispatch)
    })
)(DaySchedule);

/* export default connect(
    function(state) {
        let dayData;
        if (state.mode === 'READ') {
            dayData = state.dayData;
            //dayData = JSON.parse(JSON.stringify(state.dayData));
        }
        return {dayData};
    },
    function(dispatch) {
        return {
            onChangeDate: function(fullDay) {
                //console.log("DayScheduleContainer", fullDay);
                dispatch({
                    type:'CHANGE_DATE', fullDay
                });
            }
        };
    }
)(DaySchedule); */