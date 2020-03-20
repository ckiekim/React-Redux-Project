import Main from '../components/Main';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as monthActions from '../modules/month';

export default connect(
    (state) => ({ 
        monthRefresh: state.month.monthRefresh,
		year: state.month.year,
		month: state.month.month,
        monthData: state.month.monthData,
		loading: state.pender.pending['GET_CALENDAR'],
		error: state.pender.failure['GET_CALENDAR']
	}),
	(dispatch) => ({
		MonthActions: bindActionCreators(monthActions, dispatch)
	})
)(Main);

