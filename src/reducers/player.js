import { handleActions } from 'redux-actions';
import { createStructuredSelector } from 'reselect';

// import { FETCH_DICTIONARIES } from '../../constants';

export const initialState = {
	player: {
		name: null
	},
};

const reducer = 'player';

const getLocalState = state => state[reducer];

// selectors
const playerName = state => (getLocalState(state).name);


export const playerSelector = createStructuredSelector({
	playerName
});

// reducer
export default handleActions({
	// [FETCH_DICTIONARIES]: (state, { payload }) => ({
	// 	...state,
	// 	...payload.data,
	// 	response: { ...payload.response },
	// }),
}, initialState);
