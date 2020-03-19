import CreateSchedule from '../components/CreateSchedule';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as scheduleActions from '../modules/schedule';
import * as monthActions from '../modules/month';

export default connect(
    (state) => ({
        refresh: state.month.refresh,
        flag: state.schedule,
        loading: state.pender.pending['ADD_SCHEDULE'],
        error: state.pender.failure['ADD_SCHEDULE']
    }),
    (dispatch) => ({
        ScheduleActions: bindActionCreators(scheduleActions, dispatch),
        MonthActions: bindActionCreators(monthActions, dispatch)
    })
)(CreateSchedule);

/* export default connect(
    null,
    function(dispatch) {
        return {
            onSubmit: function(formData) {
                //console.log("DayScheduleContainer", fullDay);
                dispatch({
                    type:'CREATE_PROC', formData
                });
            }
        };
    }
)(CreateSchedule); */