/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import * as React from 'react';
import {
  createAppContainer,
  createSwitchNavigator,
  NavigationContainerComponent,
} from 'react-navigation';

import * as routes from 'constants/route';
import LandingScreen from 'view/LandingScreen';
import AppStack from 'view/AppStack';
import AuthStack from 'view/AuthStack';
import {setTopLevelNavigator} from 'util/navigationService';
import {Provider} from 'react-redux';
import configureStore from 'store';
import Toast from 'component/Toast';

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      [routes.landingScreen]: LandingScreen,
      [routes.appStack]: AppStack,
      [routes.authStack]: AuthStack,
    },
    {
      initialRouteName: routes.appStack,
    },
  ),
);

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <>
        <AppContainer
          ref={(navigatorRef: NavigationContainerComponent) => {
            setTopLevelNavigator(navigatorRef);
          }}
        />
        <Toast />
      </>
    </Provider>
  );
};

export default App;
