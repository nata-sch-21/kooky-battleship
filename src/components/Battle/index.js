import { connect } from 'react-redux';
import React, { Component } from 'react';
import { shape, func } from 'prop-types';
import { nest } from 'recompose';

import { battlefieldSelector } from '../../reducers/battlefields';

import Battle from './Battle';
import Wrapper from '../Wrapper';

const mapStateToProps = state => ({ ...battlefieldSelector(state).battlefields });

const mapDispatchToProps = () => ({});

const Wrapped = nest(Wrapper, connect(mapStateToProps, mapDispatchToProps)(Battle));

// should be wrapped by class to use HMR
export default class extends Component {
  static navigationOptions = {
    header: null,
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
