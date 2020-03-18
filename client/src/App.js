import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import TopLeft from './components/TopLeft';
import MainContainer from './containers/MainContainer';

import { bindActionCreators } from 'redux';
import * as generalActions from './modules/general';
import * as monthActions from './modules/month';

class App extends Component {
	/* componentDidMount() {
		const { year, month } = this.props;
		let yearMonth = month > 9 ? `${year}${month}` : `${year}0${month}`;
		console.log('componentDidMount()', yearMonth);
		this.getCalendar(yearMonth);
	}
	getCalendar = async (yearMonth) => {
		const { MonthActions } = this.props;
        console.log('getCalendar()', yearMonth);
        try {
            await MonthActions.getCalendar(yearMonth);
            console.log('요청이 완료된 후 실행됨');
        } catch(e) {
            console.log('에러 발생!!!');
        }
    }; */

	render() {
		const { badgeContent } = this.props;
		return (
			<div style={{ display: 'flex'}}>
				<CssBaseline />
				<TopLeft badgeContent={badgeContent} />
				<MainContainer />
			</div>
		);
	}
}

export default connect(
	(state) => ({ 
		year: state.month.year,
		month: state.month.month,
		badgeContent: state.general.badgeContent
	}),
	(dispatch) => ({
		GeneralActions: bindActionCreators(generalActions, dispatch),
		MonthActions: bindActionCreators(monthActions, dispatch)
	})	
)(App);
