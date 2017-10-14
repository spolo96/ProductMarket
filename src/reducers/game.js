// @flow

import type { Action, GameState } from '../types';

const initialState: GameState = {
  players: {},
  association: {
    a: [],
    b: [],
  },
};

export default function reducer(state: GameState = initialState, action: Action = { type: 'NOOP' }): GameState {
  switch (action.type) {
    case 'ADD_PLAYER': {
      const {
        name,
        team,
      } = action;

      const id = name; // uuid v4

      return {
        ...state,
        players: {
          ...state.players,
          [id]: {
            id,
            name,
          },
        },
        association: {
          ...state.association,
          [team]: [
            ...state.association[team],
            id,
          ],
        },
      };
    }

    case 'ADD_ITEM': {
      const {
        name,
        team,
      } = action;

      const id = name; // uuid v4

      return {
        ...state,
        players: {
          ...state.players,
          [id]: {
            id,
            name,
          },
        },
        association: {
          ...state.association,
          [team]: [
            ...state.association[team],
            id,
          ],
        },
      };
    }

    case 'SWITCH_PLAYER_TEAM': {
      const { id } = action;

      const isInTeamA =
        state.association.a.find(item => item === id) !== undefined;

      const currentTeam = isInTeamA ? 'a' : 'b';
      const newTeam = isInTeamA ? 'b' : 'a';

      return {
        ...state,
        association: {
          [currentTeam]: state.association[currentTeam].filter(item => item !== id),
          [newTeam]: [...state.association[newTeam], id],
        },
      };
    }

    default: {
      return state;
    }
  }
}
