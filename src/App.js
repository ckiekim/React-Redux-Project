import React, { Component } from 'react';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import TopLeft from './components/TopLeft';
import Main from './components/Main';

const styles = theme => ({
    root: {
        display: 'flex'
    }
});

class App extends Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<CssBaseline />
				<TopLeft/>
				<Main/>
			</div>
		);
	}
}

export default withStyles(styles)(App);
