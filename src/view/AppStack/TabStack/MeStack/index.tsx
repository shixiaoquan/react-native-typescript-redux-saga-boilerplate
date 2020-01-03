import * as React from 'react';
import { Image } from 'react-native';
import {
  createStackNavigator,
  NavigationStackConfig,
  NavigationStackScreenProps,
} from 'react-navigation-stack';
import * as routes from 'constants/route';
import Me from './Me';

const activeIcon = require('asset/image/tabbar_me_active.png');
const inactiveIcon = require('asset/image/tabbar_me_inactive.png');

const routeConfig = {
  [routes.me]: Me,
};

const navigatorConfig: NavigationStackConfig = {
  mode: 'card',
  headerMode: 'none',
};

const MeStack = createStackNavigator(routeConfig, navigatorConfig);

const tabBarIcon = ({ focused }: { focused: Boolean }) => (
  <Image
    source={focused ? activeIcon : inactiveIcon}
    style={{ height: 22, width: 28 }}
    resizeMode="contain"
  />
);

MeStack.navigationOptions = ({ navigation }: NavigationStackScreenProps) => {
  const { index } = navigation.state;
  return {
    tabBarVisible: index === 0,
    tabBarLabel: '我的',
    tabBarIcon,
  };
};

export default MeStack;
