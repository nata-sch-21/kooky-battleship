import { handleActions } from 'redux-actions';
import { createStructuredSelector } from 'reselect';

import { SET_CONTENDER_DATA } from '../actions/contender';

export const initialState = {
  name: null,
};

const reducer = 'contender';

const getLocalState = state => state[reducer];

// selectors
const contenderName = state => (getLocalState(state).name);


export const contenderSelector = createStructuredSelector({
  contenderName,
});

// reducer
export default handleActions({
  [SET_CONTENDER_DATA]: (state, { payload }) => ({
    ...state,
    name: payload.playerName,
  }),
}, initialState);
