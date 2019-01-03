import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import {
  object, objectOf,
} from 'prop-types';

import Orientation from 'react-native-orientation';

import configs from '../../configs/game';



const StyledView = styled(View)`
  display: flex;

`;


class Battle extends Component {
  render() {
    const initial = Orientation.lockToLandscape();
    console.log(initial);
    return (
      <StyledView>
        <Text>kldmf</Text>
      </StyledView>
    );
  }
}

Battle.propTypes = {

};

export default Battle;
