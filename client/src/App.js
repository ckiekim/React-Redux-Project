import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import TopLeft from './components/TopLeft';
import MainContainer from './containers/MainContainer';

import { bindActionCreators } from 'redux';
import * as generalActions from './modules/general';

class App extends Component {
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
		badgeContent: state.general,
	}),
	(dispatch) => ({
		GeneralActions: bindActionCreators(generalActions, dispatch),
	})	
)(App);
