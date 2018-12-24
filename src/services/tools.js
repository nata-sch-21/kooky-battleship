import { Dimensions } from 'react-native';

import configs from '../configs/game';

export const generateEmptyBattleField = () => {
  const { xAxis, yAxis, cellStatuses: { EMPTY } } = configs.battlefield;

  const battlefield = {};

  yAxis.forEach((yCoordinate) => {
    battlefield[yCoordinate] = {};

    xAxis.forEach((xCoordinate) => {
      battlefield[yCoordinate][xCoordinate] = {
        status: EMPTY,
        content: '',
      };
    });
  });

  return battlefield;
};

export const getBattlefieldSize = () => {
  const { width, height } = Dimensions.get('window');
  return Math.min(width, height) * 65 / 100;
};

export const getCellWidth = () => {
  const { xAxis } = configs.battlefield;
  return getBattlefieldSize() / (xAxis.length + 1);
};

export const getRowHeight = () => {
  const { yAxis } = configs.battlefield;
  return getBattlefieldSize() / (Number(yAxis[yAxis.length - 1]) + 1);
};

export const autoplaceShipsOnBattleField = () => {
  const battlefield = {};


  return battlefield;
};
