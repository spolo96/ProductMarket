// @flow

export const addPlayer = (name: string, team: 'a' | 'b') => ({
  type: 'ADD_PLAYER',
  name,
  team,
});

export const addProduct = (name: string, isInCart: 'yes'|'no') => ({
  type: 'ADD_PRODUCT',
  name,
  isInCart,
});

export const switchPlayerTeam = (id: string) => ({
  type: 'SWITCH_PLAYER_TEAM',
  id,
});
