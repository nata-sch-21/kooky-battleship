import React, { Component } from 'react';
import { nest } from 'recompose';
import { shape, func } from 'prop-types';

import ShipsPlacement from './ShipsPlacement';
import Wrapper from '../Wrapper';

const Wrapped = nest(Wrapper, ShipsPlacement);

// should be wrapped by class to use HMR
export default class extends Component {
  static navigationOptions = {
    title: 'Ships',
    headerTitleStyle: {
      width: '68%',
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
