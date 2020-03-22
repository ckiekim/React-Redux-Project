import UpdateSchedule from '../components/UpdateSchedule';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as scheduleActions from '../modules/schedule';

export default connect(
    (state) => ({
        listRefresh: state.schedule.listRefresh,
        loading: state.pender.pending['DELETE_SCHEDULE'],
        error: state.pender.failure['DELETE_SCHEDULE']
    }),
    (dispatch) => ({
        ScheduleActions: bindActionCreators(scheduleActions, dispatch)
    })
)(UpdateSchedule);
