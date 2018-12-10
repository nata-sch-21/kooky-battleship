import React from 'react';
import { func, shape } from 'prop-types';
import { View } from 'react-native';

import styled from 'styled-components/native';

import Button from '../Button';
import BattleField from '../BattleField';

import styles from '../../configs/styles';
import game from '../../configs/game';

const ContainerView = styled(View)`
	display: flex;
	align-self: center;
	justify-content: space-between;
	border-radius: ${styles.borderRadius};
	border: 2px solid #fff;
	width: 95%;
	height: 95%;
	background-color: ${styles.colors.bgColor};
	margin: 3%;
`;


const ButtonContainerView = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const BattlefieldContainer = styled(View)`
  border: 1px solid red;
`;

// StyledView is used because TextInput has issues with blurring
const ShipsPlacement = ({ navigation }) => {
  return (
    <ContainerView>
      <BattlefieldContainer>
        <BattleField playerType={game.playerTypes.PLAYER} />
      </BattlefieldContainer>
      <ButtonContainerView>
        <Button enableDispatch={false} onPress={() => alert('Auto-placement')}>
          Auto-placement
        </Button>
        <Button onPress={() => alert('Battle')}>
          Find a contender
        </Button>
      </ButtonContainerView>
    </ContainerView>
  );
};

ShipsPlacement.propTypes = {
  navigation: shape({
    navigate: func.isRequired,
  }).isRequired,
};

export default ShipsPlacement;
