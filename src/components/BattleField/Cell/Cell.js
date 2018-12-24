import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { string } from 'prop-types';
import { getCellWidth } from '../../../services/tools';

import configs from '../../../configs/game';
import styles from '../../../configs/styles';

const cellWidth = getCellWidth();

const StyledCell = styled(View)`
  width: ${cellWidth};
  height 100%;
  padding: 1px;
`;

const DefaultCell = styled(Text)`
  text-align: center;
  width: 100%;
  height: 100%;
`;

const EmptyCell = styled(DefaultCell)`
  background-color: ${styles.colors.lightBlue};
`;

const AliveCell = styled(DefaultCell)`
  background-color: ${styles.colors.navy};
`;

const InjuredCell = styled(AliveCell)`
  color: ${styles.colors.white};
`;

const DeadCell = styled(InjuredCell)`
  background-color: ${styles.colors.burgundy};
`;

const { cellStatuses } = configs.battlefield;

const getCell = (status, children) => {
  switch (status) {
    case cellStatuses.EMPTY:
      return <EmptyCell />;
    case cellStatuses.DISABLED:
      return <EmptyCell>&#8226;</EmptyCell>;
    case cellStatuses.ALIVE:
      return <AliveCell />;
    case cellStatuses.INJURED:
      return <InjuredCell>&#x2715;</InjuredCell>;
    case cellStatuses.DEAD:
      return <DeadCell>&#x2715;</DeadCell>;
    default:
      return <DefaultCell>{children}</DefaultCell>;
  }
};


class Cell extends Component {
  render() {
    const { status, children } = this.props;
    return (
      <StyledCell>
        {getCell(status, children)}
      </StyledCell>
    );
  }
}

Cell.propTypes = {
  children: string,
  status: string,
};

Cell.defaultProps = {
  children: '',
  status: '',
};

export default Cell;
