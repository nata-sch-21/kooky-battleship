import { handleActions } from 'redux-actions';
import { createStructuredSelector } from 'reselect';

import BattlefieldService from '../services/BattlefieldService';
import { PLAYER_AUTOPLACEMENT_SHIPS } from '../actions/battlefields';

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
export const battlefield = (state, playerType) => (getLocalState(state)[playerType].battlefield);

const battlefields = state => ({
  player: getLocalState(state).player.battlefield,
  contender: getLocalState(state).contender.battlefield,
});

export const battlefieldSelector = createStructuredSelector({
  battlefields,
});

// reducer
export default handleActions({
  [PLAYER_AUTOPLACEMENT_SHIPS]: (state, { payload }) => ({
    ...state,
    player: {
      ...state.player,
      battlefield: BattlefieldService.getWithAutoplacedShips(),
    },
  }),
}, initialState);
