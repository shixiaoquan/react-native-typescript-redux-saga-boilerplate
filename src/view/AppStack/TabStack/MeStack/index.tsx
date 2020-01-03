import * as React from 'react';
import {
  createStackNavigator,
  NavigationStackConfig,
  NavigationStackScreenProps,
} from 'react-navigation-stack';
import styled from 'styled-components/native';

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

const Icon = styled.Image`
  width: 28;
  height: 22;
`;

const tabBarIcon = ({focused}: {focused: Boolean}) => (
  <Icon source={focused ? activeIcon : inactiveIcon} resizeMode="contain" />
);

MeStack.navigationOptions = ({navigation}: NavigationStackScreenProps) => {
  const {index} = navigation.state;
  return {
    tabBarVisible: index === 0,
    tabBarLabel: '我的',
    tabBarIcon,
  };
};

export default MeStack;
