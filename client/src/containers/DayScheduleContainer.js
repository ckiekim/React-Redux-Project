import DaySchedule from '../components/DaySchedule';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as dateActions from '../modules/date';
import * as generalActions from '../modules/general';
import * as scheduleActions from '../modules/schedule';

export default connect(
    (state) => ({
        today: state.general.today,
        dateRefresh: state.date.dateRefresh,
        date: state.date.date,
        dayData: state.date.dayData,
        loading: state.pender.pending['GET_DATE'],
        error: state.pender.failure['GET_DATE']
    }),
    (dispatch) => ({
        DateActions: bindActionCreators(dateActions, dispatch),
        GeneralActions: bindActionCreators(generalActions, dispatch),
        ScheduleActions: bindActionCreators(scheduleActions, dispatch)
    })
)(DaySchedule);
