import Main from '../components/Main';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as monthActions from '../modules/month';

export default connect(
    (state) => ({ 
        refresh: state.month.refresh,
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


/* export default connect(
    function(state) {
        let year, month, monthData;
        if (state.mode === 'READ') {
            year = state.year;
            month = state.month;
            monthData = state.monthData;
            //monthData = JSON.parse(JSON.stringify(state.monthData));
        }
        console.log(year, month);
        return {year, month, monthData};
    },
    function(dispatch) {
        return {
            onChangeMonth: function(year, month) {
                //console.log("MainContainer", year, month);
                dispatch({
                    type:'CHANGE_MONTH', year, month
                });
            }
        };
    }
)(Main); */
