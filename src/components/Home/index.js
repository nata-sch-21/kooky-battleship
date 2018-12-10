import React, { Component } from 'react';
import { nest } from 'recompose';
import { shape, func } from 'prop-types';

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

  static propTypes = {
    navigation: shape({
      navigate: func.isRequired,
    }).isRequired,
  };

  render() {
    const { navigation } = this.props;
    return <Wrapped navigation={navigation} />;
  }
}
