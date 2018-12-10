import { combineReducers } from 'redux';
import player from './player';
import contender from './contender';
import battlefields from './battlefields';

export default combineReducers({
  player,
  contender,
  battlefields,
});
