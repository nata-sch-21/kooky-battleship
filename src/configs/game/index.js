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
    ships: [
      {
        name: 'four',
        cellsNumber: 4,
      },
      {
        name: 'three_1',
        cellsNumber: 3,
      },
      {
        name: 'three_2',
        cellsNumber: 3,
      },
      {
        name: 'two_1',
        cellsNumber: 2,
      },
      {
        name: 'two_2',
        cellsNumber: 2,
      },
      {
        name: 'two_3',
        cellsNumber: 2,
      },
      {
        name: 'one_1',
        cellsNumber: 1,
      },
      {
        name: 'one_2',
        cellsNumber: 1,
      },
      {
        name: 'one_3',
        cellsNumber: 1,
      },
      {
        name: 'one_4',
        cellsNumber: 1,
      },
    ],
  },
  playerTypes: {
    PLAYER: 'player',
    CONTENDER: 'contender',
  },
};

export default configs;
