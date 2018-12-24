const configs = {
  battlefield: {
    xAxis: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'],
    yAxis: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    cellStatuses: {
      DEAD: 'DEAD', // a cell is a part of a ship and the ship has been killed already
      ALIVE: 'ALIVE', // a cell is a part of a ship
      EMPTY: 'EMPTY', // an empty cell without a ship
      INJURED: 'INJURED',
      DISABLED: 'DISABLED',
    },
  },
  playerTypes: {
    PLAYER: 'player',
    CONTENDER: 'contender',
  },
};

export default configs;
