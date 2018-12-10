import { createAction } from 'redux-actions';

export const SET_PLAYER_NAME = 'player@SET_PLAYER_NAME';
export const AUTOPLACEMENT_SHIPS = 'player@AUTOPLACEMENT_SHIPS';

export const setPlayerName = createAction(SET_PLAYER_NAME);
