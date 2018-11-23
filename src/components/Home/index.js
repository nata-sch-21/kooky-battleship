import React, { Component } from 'react';

import Home from './Home';

// should be wrapped by class to use HMR
export default class extends Component {
	static navigationOptions = {
		title: 'Welcome to Kooky Battleship',
		headerTitleStyle: {
			width: '90%',
			textAlign: 'center',
		},
	};

	render() {
		return <Home />;
	}
};
