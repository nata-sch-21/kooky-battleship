import { handleActions } from 'redux-actions';
import { createStructuredSelector } from 'reselect';

import { SET_PLAYER_NAME } from '../actions/player';

export const initialState = {
  player: {
    name: null,
  },
};

const reducer = 'player';

const getLocalState = state => state[reducer];

// selectors
const playerName = state => (getLocalState(state).name);


export const playerSelector = createStructuredSelector({
  playerName,
});

// reducer
export default handleActions({
  [SET_PLAYER_NAME]: (state, { payload }) => ({
    ...state,
    player: {
      name: payload.playerName,
    },
  }),
}, initialState);
