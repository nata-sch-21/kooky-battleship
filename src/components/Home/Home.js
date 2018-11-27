import React from 'react';
import { compose, withStateHandlers } from 'recompose';
import { func, string } from 'prop-types';
import styled from 'styled-components/native';
import { View } from 'react-native';

import Button from '../Button';
import Input from '../Input';
import { setPlayerName } from '../../actions/player';

const StyledView = styled(View)`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: stretch;
	width: auto;
	height: 100%;
`;

const Home = ({ playerName, onChangePlayerName }) => (
  <StyledView>
    <Input onChangeText={onChangePlayerName} placeholder="Name" value={playerName} />
    <Button onPress={setPlayerName({ playerName })} disabled={!playerName}>
      Start the game
    </Button>
  </StyledView>
);

Home.propTypes = {
  onChangePlayerName: func.isRequired,
  playerName: string,
};

Home.defaultProps = {
  playerName: '',
};

const EnhancedHome = compose(
  withStateHandlers(
    { playerName: '' },
    {
      onChangePlayerName: () => value => ({
        playerName: value,
      }),
    },
  ),
)(Home);

export default EnhancedHome;
