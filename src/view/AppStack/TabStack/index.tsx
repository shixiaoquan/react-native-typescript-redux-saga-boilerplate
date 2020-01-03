import {createBottomTabNavigator} from 'react-navigation-tabs';

import * as routes from 'constants/route';
import HomeStack from './HomeStack';
import MeStack from './MeStack';

const routeConfig = {
  [routes.homeStack]: HomeStack,
  [routes.meStack]: MeStack,
};

const navigatorConfig = {
  initialRouteName: routes.homeStack,
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
};

const TabStack = createBottomTabNavigator(routeConfig, navigatorConfig);

TabStack.navigationOptions = {
  header: null,
};

export default TabStack;
