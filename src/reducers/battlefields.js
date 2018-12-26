import { handleActions } from 'redux-actions';
import { createStructuredSelector } from 'reselect';

import BattlefieldService from '../services/BattlefieldService';

export const initialState = {
  player: {
    battlefield: BattlefieldService.getWithAutoplacedShips(),
    ships: null,
  },
  contender: {
    battlefield: null,
    ships: null,
  },
};

const reducer = 'battlefields';

const getLocalState = state => state[reducer];

// selectors
const battlefield = (state, playerType) => (getLocalState(state)[playerType].battlefield);


export const battlefieldSelector = createStructuredSelector({
  battlefield,
});

// reducer
export default handleActions({

}, initialState);
