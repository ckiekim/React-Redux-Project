import React, { Component } from 'react';
import './App.css';
/* import SignIn from './templates/SignIn';
import SignUp from './templates/SignUp'; 
import Album from './templates/Album';
import Pricing from './templates/Pricing';
import StickyFooter from './templates/StickyFooter'; */
import Dashboard from './dashboard/Dashboard';
import MaterialUI from './templates/MaterialUI';
import Main from './Main';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Main/>
			</div>
		);
	}
}

export default App;
