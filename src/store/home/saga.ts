import {takeLatest, all} from 'redux-saga/effects';

import ajaxSaga from '../ajaxSaga';
import {GET_CARS_REQ, GET_CARS_RES, HomeActionTypes} from './type';
import {getCars} from 'service/home';

const getCarsSaga = function* saga(action: HomeActionTypes) {
  yield* ajaxSaga({
    action,
    api: getCars,
    doneActionType: GET_CARS_RES,
  });
};

export default function* watch() {
  yield all([takeLatest(GET_CARS_REQ, getCarsSaga)]);
}
