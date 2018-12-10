// import React, { Component } from 'react';
// import { nest } from 'recompose';
// import { shape, func } from 'prop-types';
//
// import PlayerBattlefield from './PlayerBattlefield';
// import Wrapper from '../Wrapper';
//
// const Wrapped = nest(Wrapper, PlayerBattlefield);
//
// // should be wrapped by class to use HMR
// export default class extends Component {
//   static navigationOptions = {
//     title: 'Place your ships on the field',
//     headerTitleStyle: {
//       // width: '90%',
//       textAlign: 'center',
//     },
//   };
//
//   static propTypes = {
//     navigation: shape({
//       navigate: func.isRequired,
//     }).isRequired,
//   };
//
//   render() {
//     const { navigation } = this.props;
//     return <Wrapped navigation={navigation} />;
//   }
// }
