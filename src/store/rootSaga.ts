import {all, fork} from 'redux-saga/effects';
import global from './global/saga';
import home from './home/saga';

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([fork(global)]);
  yield all([fork(home)]);
}
