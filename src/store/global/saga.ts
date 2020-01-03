import {takeLatest, delay, put, select, all} from 'redux-saga/effects';

import {SHOW_TOAST, HIDE_TOAST} from './type';
import {AppState} from 'store';

const showToastSaga = function* saga() {
  const {duration} = yield select((state: AppState) => state.global.toast);
  yield delay(duration);
  yield put({type: HIDE_TOAST});
};

export default function* watch() {
  yield all([takeLatest(SHOW_TOAST, showToastSaga)]);
}
