import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from '../components/Home';

const Navigator =  createStackNavigator({
	Home: { screen: HomeScreen },
}, {
	initialRouteName: "Home",
	defaultNavigationOptions: {
		headerStyle: {
			backgroundColor: '#133e69',
			textAlign: 'center',
		},
		headerTintColor: '#fff',
	},
},);

export default createAppContainer(Navigator);
