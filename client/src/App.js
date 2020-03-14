import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import TopLeft from './components/TopLeft';
import MainContainer from './containers/MainContainer';

class App extends Component {
	render() {
		//console.log(this.props.mode);
		return (
			<div style={{ display: 'flex'}}>
				<CssBaseline />
				<TopLeft badgeContent="3" />
				<MainContainer />
			</div>
		);
	}
}

export default connect(
	function(state) {
		return { mode: state.mode }
	},
	null
)(App);
