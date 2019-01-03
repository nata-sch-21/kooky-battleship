import { shuffle } from 'underscore';

import configs from '../configs/game';

const {
  xAxis, yAxis, cellStatuses, ships,
} = configs.battlefield;


const getRandomArrayItem = items => items[Math.floor(Math.random() * items.length)];

class BattlefieldService {
  createEmpty() {
    this.excludedCells = [];
    this.placedShips = {};
    this.battlefield = {};

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

    this.placementShip(xAxis, yAxis, ships[0].cellsNumber);

    ships.forEach((ship) => {
      const key = getRandomArrayItem([0, 1]);

      if (key === 1) {
        this.placementShip(xAxis, yAxis, ship);
      } else {
        this.placementShip(yAxis, xAxis, ship);
      }
    });

    return this.battlefield;
  }

  placementShip(axisOne, axisTwo, shopToPlace) {
    const shipSize = shopToPlace.cellsNumber;
    const shuffledAxisOne = shuffle(axisOne);
    const shuffledAxisTwo = shuffle(axisTwo);

    let ship  ;

    for (const a of shuffledAxisOne) {
      ship = null;

      const indexOne = axisOne.indexOf(a);
      if (indexOne + shipSize > axisOne.length) {
        continue;
      }

      const shipAreaOne = axisOne.slice(indexOne === 0 ? indexOne : indexOne - 1, indexOne + shipSize + 1);

      for (const b of shuffledAxisTwo) {
        const indexTwo = axisTwo.indexOf(b);
        const shipAreaTwo = axisTwo.slice(indexTwo === 0 ? indexTwo : indexTwo - 1, indexTwo + 1);

        const allowPlacement = this.processExcludeCells(shipAreaOne, shipAreaTwo, b);

        if (!allowPlacement) continue;

        ship = axisOne.slice(indexOne, indexOne + shipSize);
        this.addShipToBattlefield(ship, b);
        break;
      }

      if (ship) {
        break;
      }
    }
  }

  processExcludeCells(shipAreaOne, shipAreaTwo) {
    const excludedCells = [];

    for (const a of shipAreaOne) {
      for (const b of shipAreaTwo) {
        if (
          this.excludedCells.indexOf(`${a}|${b}`) !== -1
          || this.excludedCells.indexOf(`${b}|${a}`) !== -1
        ) {
          return false;
        }

        excludedCells.push(`${a}|${b}`);
      }
    }

    this.excludedCells = this.excludedCells.concat(excludedCells);

    return true;
  }

  addShipToBattlefield(ship, startCoordinate) {
    let yCoordinate = null;

    if (this.battlefield[startCoordinate]) {
      yCoordinate = startCoordinate;
    }

    ship.forEach((coordinate) => {
      const y = yCoordinate || coordinate;
      const x = !yCoordinate ? startCoordinate : coordinate;

      this.battlefield[y][x].status = cellStatuses.ALIVE;
    });
  }
}

export default new BattlefieldService();
