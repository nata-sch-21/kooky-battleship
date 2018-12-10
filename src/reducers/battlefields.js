import { handleActions } from 'redux-actions';
import { createStructuredSelector } from 'reselect';

import { generateEmptyBattleField } from '../services/tools';

export const initialState = {
  player: {
    battlefield: generateEmptyBattleField(),
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
