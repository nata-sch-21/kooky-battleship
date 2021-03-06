import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from '../components/Home';
import ShipsPlacement from '../components/ShipsPlacement';
import Battle from '../components/Battle';
import styles from '../configs/styles';

const Navigator = createStackNavigator({
  Home: { screen: HomeScreen },
  ShipsPlacement: { screen: ShipsPlacement },
  Battle: { screen: Battle },
}, {
  initialRouteName: 'ShipsPlacement',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: styles.colors.navy,
      textAlign: 'center',
    },
    headerTintColor: styles.colors.white,
  },
});

export default createAppContainer(Navigator);
