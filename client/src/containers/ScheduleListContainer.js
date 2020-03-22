import ScheduleList from '../components/ScheduleList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as generalActions from '../modules/general';
import * as scheduleActions from '../modules/schedule';

export default connect(
    (state) => ({
        mode: state.general.mode,
        today: state.general.today,
        listRefresh: state.schedule.listRefresh,
        scheduleList: state.schedule.scheduleList,
        loading: state.pender.pending['GET_SCHEDULE_LIST'],
        error: state.pender.failure['GET_SCHEDULE_LIST']
    }),
    (dispatch) => ({
        GeneralActions: bindActionCreators(generalActions, dispatch),
        ScheduleActions: bindActionCreators(scheduleActions, dispatch)
    })
)(ScheduleList);
