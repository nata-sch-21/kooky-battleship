import React, { Component } from 'react';
import { nest } from 'recompose';

import Home from './Home';
import Wrapper from '../Wrapper';

const Wrapped = nest(Wrapper, Home);

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
    return <Wrapped />;
  }
}
