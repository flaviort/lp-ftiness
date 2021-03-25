import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';

import TopMenu from './components/TopMenu';

import Home from './pages/Home';

function App() {
	return (
		<>
			<Router>
				<TopMenu />
				<Switch>
					<Route path="/" exact component={Home} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
