import DaySchedule from '../components/DaySchedule';
import { connect } from 'react-redux';

export default connect(
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
)(DaySchedule);