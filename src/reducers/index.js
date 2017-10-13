// @flow

import { combineReducers } from 'redux';

import type {
  Reducer,
  State,
} from '../types';

import game from './game';

const rootReducer: Reducer<State> = combineReducers({
  game,
});

export default rootReducer;
