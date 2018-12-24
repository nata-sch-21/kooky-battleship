import React, { Component } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { string, shape } from 'prop-types';

import { getRowHeight } from '../../../services/tools';
import Cell from '../Cell';

const rowHeight = getRowHeight();

const StyledView = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  width: 100%;
  height: ${rowHeight}px;
`;

const getCells = (row) => {
  const keys = Object.keys(row);
  return keys.map(key => <Cell key={key} status={row[key].status}>{row[key].content}</Cell>);
};

class Row extends Component {
  render() {
    const { yCoordinate, row } = this.props;
    return (
      <StyledView>
        <Cell>
          {yCoordinate}
        </Cell>
        {getCells(row)}
      </StyledView>
    );
  }
}

Row.propTypes = {
  yCoordinate: string,
  row: shape({
    status: string,
    content: string,
  }),
};

Row.defaultProps = {
  yCoordinate: '',
  row: {},
};


export default Row;
