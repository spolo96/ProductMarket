// @flow

export const addPlayer = (name: string, team: 'a' | 'b') => ({
  type: 'ADD_PLAYER',
  name,
  team,
});

export const addItem = (name: string, team: 'a'|'b') => ({
  type: 'ADD_ITEM',
  name,
  team,
});

export const switchPlayerTeam = (id: string) => ({
  type: 'SWITCH_PLAYER_TEAM',
  id,
});
