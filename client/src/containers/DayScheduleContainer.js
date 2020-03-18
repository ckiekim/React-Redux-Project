import DaySchedule from '../components/DaySchedule';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as generalActions from '../modules/general';

export default connect(
    (state) => ({
        dayData: state.general.dayData
    }),
    (dispatch) => ({
        GeneralAction: bindActionCreators(generalActions, dispatch)
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