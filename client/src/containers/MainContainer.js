import Main from '../components/Main';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as generalActions from '../modules/general';
import * as monthActions from '../modules/month';
import * as scheduleActions from '../modules/schedule';


export default connect(
    (state) => ({ 
		today: state.general.today,
        monthRefresh: state.month.monthRefresh,
		year: state.month.year,
		month: state.month.month,
        monthData: state.month.monthData,
		loading: state.pender.pending['GET_CALENDAR'],
		error: state.pender.failure['GET_CALENDAR']
	}),
	(dispatch) => ({
		GeneralActions: bindActionCreators(generalActions, dispatch),
		MonthActions: bindActionCreators(monthActions, dispatch),
		ScheduleActions: bindActionCreators(scheduleActions, dispatch)
	})
)(Main);

