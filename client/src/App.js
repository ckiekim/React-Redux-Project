import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import TopLeft from './components/TopLeft';
import MainContainer from './containers/MainContainer';
import ScheduleListContainer from './containers/ScheduleListContainer';

import { bindActionCreators } from 'redux';
import * as generalActions from './modules/general';
import * as monthActions from './modules/month';

class App extends Component {
	componentDidMount() {
		let tmp = new Date().toLocaleDateString().replace(/\./g, '').split(' ');
        let ym = tmp[1].length===1? tmp[0]+'-0'+tmp[1] : tmp[0]+'-'+tmp[1];
		let today = tmp[2].length===1? ym+'-0'+tmp[2] : ym+'-'+tmp[2];
		console.log('componentDidMount()', today);
		this.props.GeneralActions.setToday(today);
	}
	render() {
		const { mode, badgeContent } = this.props;
		return (
			<div style={{ display: 'flex'}}>
				<CssBaseline />
				<TopLeft badgeContent={badgeContent} />
				{mode === 'GRID' ?
					<MainContainer /> :
					<ScheduleListContainer />
				}
			</div>
		);
	}
}

export default connect(
	(state) => ({
		mode: state.general.mode,
		today: state.general.today,
		year: state.month.year,
		month: state.month.month,
		badgeContent: state.general.badgeContent
	}),
	(dispatch) => ({
		GeneralActions: bindActionCreators(generalActions, dispatch),
		MonthActions: bindActionCreators(monthActions, dispatch)
	})	
)(App);
