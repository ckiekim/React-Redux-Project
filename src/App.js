import React, { Component } from 'react';
import './App.css';
import Dashboard from './dashboard/Dashboard';
import SignIn from './templates/SignIn';
import SignUp from './templates/SignUp'; 
import Album from './templates/Album';
import Pricing from './templates/Pricing';
import StickyFooter from './templates/StickyFooter';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Dashboard/>
			</div>
		);
	}
}

export default App;
