import DayCard from '../components/DayCard';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as generalActions from '../modules/general';

export default connect(
    (state) => ({
        today: state.general.today,
        badgeContent: state.general.badgeContent
    }),
    (dispatch) => ({
        GeneralActions: bindActionCreators(generalActions, dispatch)
    })
)(DayCard);
