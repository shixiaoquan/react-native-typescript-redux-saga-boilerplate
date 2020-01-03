/**
 * Use this approach to route when cannot access navigation prop
 *
 * @format
 */
import {
  NavigationActions,
  StackActions,
  NavigationReplaceActionPayload,
  NavigationContainerComponent,
} from 'react-navigation';

let _navigator: NavigationContainerComponent;

let waiting = false;
const waitDuration = 100;

const setTopLevelNavigator = (navigatorRef: NavigationContainerComponent) => {
  console.log({navigatorRef});
  _navigator = navigatorRef;
};

const reset = (routeName: string, params: object) => {
  if (waiting) {
    return;
  }
  waiting = true;
  _navigator.dispatch(
    StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({
          routeName,
          params,
        }),
      ],
    }),
  );
  setTimeout(() => {
    waiting = false;
  }, waitDuration);
};

const replace = ({
  key,
  newKey = '',
  routeName,
  params = {},
  action = undefined,
}: NavigationReplaceActionPayload) => {
  if (waiting) {
    return;
  }
  waiting = true;
  _navigator.dispatch(
    StackActions.replace({
      key,
      newKey,
      routeName,
      params,
      action,
    }),
  );
  setTimeout(() => {
    waiting = false;
  }, waitDuration);
};

const push = (routeName: string, params: object) => {
  if (waiting) {
    return;
  }
  waiting = true;
  _navigator.dispatch(
    StackActions.push({
      routeName,
      params,
    }),
  );
  setTimeout(() => {
    waiting = false;
  }, waitDuration);
};

const pop = (n: number) => {
  if (waiting) {
    return;
  }
  waiting = true;
  _navigator.dispatch(
    StackActions.pop({
      n,
    }),
  );
  setTimeout(() => {
    waiting = false;
  }, waitDuration);
};

function navigate(routeName: string, params?: object) {
  if (waiting) {
    return;
  }
  waiting = true;
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
  setTimeout(() => {
    waiting = false;
  }, waitDuration);
}

/**
 * Notice! behavior is not always same with navigation.goBack in View component
 * in the case of nested navigators, use navigation.goBack instead!
 */
const goBack = (key = null) => {
  if (waiting) {
    return;
  }
  waiting = true;
  _navigator.dispatch(NavigationActions.back({key}));
  // _navigator.currentNavProp.goBack(null);
  // _navigator.getCurrentNavigation().goBack(null);
  setTimeout(() => {
    waiting = false;
  }, waitDuration);
};

// add other navigation functions that you need and export them
export {reset, replace, push, pop, navigate, goBack, setTopLevelNavigator};
