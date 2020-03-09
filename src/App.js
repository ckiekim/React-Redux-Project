import React, { Component } from 'react';
import './App.css';
import MaterialUI from './MaterialUI';
import Main from './Main';
import DaySchedule from './components/DaySchedule';

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
