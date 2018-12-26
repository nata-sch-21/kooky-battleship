import configs from '../configs/game';

const {
  xAxis, yAxis, cellStatuses, ships,
} = configs.battlefield;


const getRandomArrayItem = items => items[Math.floor(Math.random() * items.length)];

const getShiftedArray = (items, start) => {
  const finish = start === 0 ? items.length - 1 : start - 1;
  const shifted = [];

  for (let i = start; i <= items.length - 1; i++) {
    shifted.push(items[i]);
  }

  if (start === 0) {
    return shifted;
  }

  for (let i = 0; i <= finish; i++) {
    shifted.push(items[i]);
  }

  return shifted;
};

class BattlefieldService {
  constructor() {
    this.excludedCells = [];
    this.placedShips = {};
    this.battlefield = {};
  }

  createEmpty() {
    const { EMPTY } = cellStatuses;

    yAxis.forEach((yCoordinate) => {
      this.battlefield[yCoordinate] = {};

      xAxis.forEach((xCoordinate) => {
        this.battlefield[yCoordinate][xCoordinate] = {
          status: EMPTY,
          content: '',
        };
      });
    });
  }

  getWithAutoplacedShips() {
    this.createEmpty();

    const yStart = getRandomArrayItem(Object.keys(yAxis));
    const xStart = getRandomArrayItem(Object.keys(yAxis));

    const shiftedYAxis = getShiftedArray(yAxis, yStart);
    const shiftedXAxis = getShiftedArray(xAxis, xStart);

    ships.forEach((ship) => {
      const key = getRandomArrayItem([0, 1]);

      if (key === 1) {
        this.placeOnX(shiftedYAxis, shiftedXAxis, ship);
      } else {
        this.placeOnY(shiftedYAxis, shiftedXAxis, ship);
      }
    });

    return this.battlefield;
  }

  placeOnX(shiftedYAxis, xAxisShifted, ship) {
    const shipSize = ship.cellsNumber;

    for (const y of shiftedYAxis) {
      let shipX = null;
      for (const x of xAxisShifted) {
        shipX = this.placeXShip(y, x, shipSize);

        if (!shipX) continue;

        for (const xCoordinate of shipX) {
          this.battlefield[y][xCoordinate].status = cellStatuses.ALIVE;
        }

        break;
      }

      if (shipX) break;
    }
  }

  placeXShip(y, x, shipSize) {
    const xIndex = xAxis.indexOf(x);
    const yIndex = yAxis.indexOf(y);

    if (xIndex + shipSize > xAxis.length) {
      return null;
    }

    const shipAreaX = xAxis.slice(xIndex === 0 ? xIndex : xIndex - 1, xIndex + shipSize + 1);
    const shipAreaY = yAxis.slice(yIndex === 0 ? yIndex : yIndex - 1, yIndex + 1);

    const excludedCells = [];

    for (const yCoordinate of shipAreaY) {
      for (const xCoordinate of shipAreaX) {
        if (this.excludedCells.indexOf(`${yCoordinate}|${xCoordinate}`) !== -1) {
          return null;
        }

        excludedCells.push(`${yCoordinate}|${xCoordinate}`);
      }
    }

    this.excludedCells = this.excludedCells.concat(excludedCells);

    return xAxis.slice(xIndex, xIndex + shipSize);
  }


  placeOnY(shiftedYAxis, xAxisShifted, ship) {
    const shipSize = ship.cellsNumber;

    for (const x of xAxisShifted) {
      let shipY = null;
      for (const y of shiftedYAxis) {
        shipY = this.placeYShip(y, x, shipSize);

        if (!shipY) continue;

        for (const yCoordinate of shipY) {
          this.battlefield[yCoordinate][x].status = cellStatuses.ALIVE;
        }

        break;
      }

      if (shipY) break;
    }
  }

  placeYShip(y, x, shipSize) {
    const xIndex = xAxis.indexOf(x);
    const yIndex = yAxis.indexOf(y);

    if (yIndex + shipSize > yAxis.length) {
      return null;
    }

    const shipAreaX = xAxis.slice(xIndex === 0 ? xIndex : xIndex - 1, xIndex + 1);
    const shipAreaY = yAxis.slice(yIndex === 0 ? yIndex : yIndex - 1, yIndex + shipSize + 1);

    const excludedCells = [];

    for (const xCoordinate of shipAreaX) {
      for (const yCoordinate of shipAreaY) {
        if (this.excludedCells.indexOf(`${yCoordinate}|${xCoordinate}`) !== -1) {
          return null;
        }

        excludedCells.push(`${yCoordinate}|${xCoordinate}`);
      }
    }

    this.excludedCells = this.excludedCells.concat(excludedCells);

    return yAxis.slice(yIndex, yIndex + shipSize);
  }

}

export default new BattlefieldService();
