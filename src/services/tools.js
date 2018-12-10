import game from '../configs/game';

export const generateEmptyBattleField = () => {
  const { xAxis, yAxis, cellStatuses: { EMPTY } } = game.battlefield;

  const battlefield = {};

  yAxis.forEach((yCoordinate) => {
    battlefield[yCoordinate] = {};

    xAxis.forEach((xCoordinate) => {
      battlefield[yCoordinate][xCoordinate] = EMPTY;
    });
  });

  return battlefield;
};

export const autoplaceShipsOnBattleField = () => {
  const battlefield = {};


  return battlefield;
};
