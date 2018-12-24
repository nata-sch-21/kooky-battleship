import React, { Component } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import {
  object, objectOf,
} from 'prop-types';

import Row from './Row';

import configs from '../../configs/game';
import { getBattlefieldSize } from '../../services/tools';

const battlefieldSize = getBattlefieldSize();

const StyledView = styled(View)`
  display: flex;
  background-color: #fff;
  align-content: stretch;
  margin-top: 3%;
  height: ${battlefieldSize}px;
  width: ${battlefieldSize}px;
`;

const getXAxis = () => {
  const xAxis = {};
  configs.battlefield.xAxis.forEach((value) => {
    xAxis[value] = {
      status: null,
      content: value,
    };
  });

  return xAxis;
};

class Battlefield extends Component {
  render() {
    const { battlefield } = this.props;
    const yAxis = Object.keys(battlefield);

    return (
      <StyledView>
        <Row
          key={0}
          row={getXAxis()}
        />
        {
          yAxis.map(yCoordinate => (
            <Row
              key={yCoordinate}
              row={battlefield[yCoordinate]}
              yCoordinate={yCoordinate}
            />))
        }
      </StyledView>
    );
  }
}

Battlefield.propTypes = {
  battlefield: objectOf(object).isRequired,
};

export default Battlefield;
