import Main from '../components/Main';
import { connect } from 'react-redux';

export default connect(
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
)(Main);
