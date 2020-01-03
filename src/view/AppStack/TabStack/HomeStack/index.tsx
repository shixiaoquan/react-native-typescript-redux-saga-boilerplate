import * as React from 'react';
import {
  createStackNavigator,
  NavigationStackConfig,
  NavigationStackScreenProps,
} from 'react-navigation-stack';
import styled from 'styled-components/native';

import * as routes from 'constants/route';
import HomeScreen from './Home';
import DetailScreen from './Detail';
const activeIcon = require('asset/image/tabbar_home_active.png');
const inactiveIcon = require('asset/image/tabbar_home_inactive.png');

const routeConfig = {
  [routes.home]: HomeScreen,
  [routes.detail]: DetailScreen,
};

const navigatorConfig: NavigationStackConfig = {
  mode: 'card',
  headerMode: 'none',
};

const HomeStack = createStackNavigator(routeConfig, navigatorConfig);

const Icon = styled.Image`
  width: 28;
  height: 22;
`;

const tabBarIcon = ({focused}: {focused: Boolean}) => (
  <Icon source={focused ? activeIcon : inactiveIcon} resizeMode="contain" />
);

HomeStack.navigationOptions = ({navigation}: NavigationStackScreenProps) => {
  const {index} = navigation.state;
  return {
    tabBarVisible: index === 0,
    tabBarLabel: '首页',
    tabBarIcon,
  };
};

export default HomeStack;
