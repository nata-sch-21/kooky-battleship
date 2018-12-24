import React from 'react';
import { compose, withStateHandlers } from 'recompose';
import { func, shape, string } from 'prop-types';
import { ScrollView } from 'react-native';

import Button from '../Button';
import Input from '../Input';
import { setPlayerName } from '../../actions/player';

// StyledView is used because TextInput has issues with blurring
const Home = ({ playerName, onChangePlayerName, navigation }) => {
  const onStartGame = () => {
    navigation.navigate('ShipsPlacement');
    return setPlayerName({ playerName });
  };

  return (
    <ScrollView
      scrollEnabled={false}
      contentContainerStyle={{ flex: 1, justifyContent: 'flex-end', alignItems: 'stretch' }}
    >
      <Input onChangeText={onChangePlayerName} placeholder="Name" value={playerName} />
      <Button onPress={onStartGame} disabled={!playerName}>
        Start the game
      </Button>
    </ScrollView>
  );
};

Home.propTypes = {
  onChangePlayerName: func.isRequired,
  playerName: string,
  navigation: shape({
    navigate: func.isRequired,
  }).isRequired,
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
