/*
 * @Author: ShiQuan
 * @Date: 2020-01-01 17:25:53
 * @Last Modified by: ShiQuan
 * @Last Modified time: 2020-01-02 14:08:37
 *
 * @format
 */

import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
// import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  // Note: createReactNavigationReduxMiddleware must be run before createReduxBoundAddListener
  // const naviMiddleware = createReactNavigationReduxMiddleware(
  //   'root',
  //   state => state.navState,
  // );
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  );

  // if (module.hot) {
  //   // Enable hot module replacement for reducers
  //   module.hot.accept(() => {
  //     const nextRootReducer = rootReducer.default;
  //     store.replaceReducer(nextRootReducer);
  //   });
  // }
  // then run the saga
  sagaMiddleware.run(rootSaga);

  return store;
}
