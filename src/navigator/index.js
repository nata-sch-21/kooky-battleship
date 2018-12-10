import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from '../components/Home';
import ShipsPlacement from '../components/ShipsPlacement';
import styles from '../configs/styles';

const Navigator = createStackNavigator({
  Home: { screen: HomeScreen },
  ShipsPlacement: { screen: ShipsPlacement },
}, {
  initialRouteName: 'ShipsPlacement',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: styles.colors.bgColor,
      textAlign: 'center',
    },
    headerTintColor: styles.colors.textColor,
  },
});

export default createAppContainer(Navigator);
