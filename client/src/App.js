import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import style from './App.css';
import Home from './Home/components'
import About from './About/components'
import Portfolio from './Portfolio/containers'
import Nav from './components/Nav'

class App extends Component {
	render() {
		return (
			<Router>
				<div className={style.App}>					
					<Nav />
					<Switch>
						<Route exact path="/" component={Home}/>
						<Route path="/about" component={About}/>
						<Route path="/portfolio" component={Portfolio}/>
					</Switch>
				</div>
			</Router>
		)
	}
}

export default App