import Content from '../components/Main';
import { connect } from 'react-redux';

export default connect(
    function(state) {
        let _title, _desc;
        if (state.mode === 'READ') {
            _title = state.welcome_content.title;
            _desc = state.welcome_content.desc;
        } else {
            for (let item of state.contents) {
                if (item.id === state.selected_id) {
                    _title = item.title;
                    _desc = item.desc;
                    break;
                }
            }
        }
        return {title:_title, desc:_desc}
    },
    null
)(Content);