import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from '../components/Home';
import styles from '../styles';

const Navigator = createStackNavigator({
  Home: { screen: HomeScreen },
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: styles.colors.bgColor,
      textAlign: 'center',
    },
    headerTintColor: styles.colors.textColor,
  },
});

export default createAppContainer(Navigator);
