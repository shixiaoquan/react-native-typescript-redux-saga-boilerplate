import {
  createStackNavigator,
  NavigationStackConfig,
} from 'react-navigation-stack';
import * as routes from 'constants/route';
import LoginScreen from './Login';

const routeConfig = {
  [routes.login]: LoginScreen,
};

const ravigatorConfig: NavigationStackConfig = {
  mode: 'card',
  headerMode: 'none',
};

export default createStackNavigator(routeConfig, ravigatorConfig);
