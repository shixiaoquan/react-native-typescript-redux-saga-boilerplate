import {
  createStackNavigator,
  NavigationStackConfig,
} from 'react-navigation-stack';
import * as routes from 'constants/route';
import TabStack from './TabStack';

const routeConfig = {
  [routes.tabStack]: TabStack,
};

const ravigatorConfig: NavigationStackConfig = {
  mode: 'modal',
  headerMode: 'none',
};

export default createStackNavigator(routeConfig, ravigatorConfig);
