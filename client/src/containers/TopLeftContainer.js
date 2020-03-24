import TopLeft from '../components/TopLeft';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as generalActions from '../modules/general';
import * as scheduleActions from '../modules/schedule';

export default connect(
    (state) => ({
        mode: state.general.mode,
        badgeContent: state.general.badgeContent
    }),
    (dispatch) => ({
        GeneralActions: bindActionCreators(generalActions, dispatch),
        ScheduleActions: bindActionCreators(scheduleActions, dispatch)
    })
)(TopLeft);
