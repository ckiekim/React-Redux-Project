import CreateSchedule from '../components/CreateSchedule';
import { connect } from 'react-redux';

export default connect(
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
)(CreateSchedule);