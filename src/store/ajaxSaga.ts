/*
 * @Author: ShiQuan
 * @Date: 2020-01-02 09:59:29
 * @Last Modified by: ShiQuan
 * @Last Modified time: 2020-01-02 17:11:52
 *
 */

import {put, call} from 'redux-saga/effects';
import {AllActionTypes} from './rootAction';
import {SHOW_TOAST} from './global/type';
interface AjaxSagaParam {
  action: AllActionTypes;
  api: (...args: any[]) => any;
  doneActionType: string;
}
const ajaxSaga = function* saga({
  action,
  api, // call API
  // onFetched, // excute when response received
  doneActionType, // store the data
}: // followUp, // follow up operations
AjaxSagaParam) {
  try {
    // do ajax and handle ajax timeout
    const response = yield call(api, action.payload);
    console.log({response});
    const resBody = yield response.json();
    console.log({resBody});

    // Ajax Response Action
    if (doneActionType) {
      yield put({
        type: doneActionType,
        payload: resBody || {},
      });
    }

    yield put({type: SHOW_TOAST, payload: {content: 'rquest succeed'}});
  } catch (error) {
    console.log(error);
  }
};

export default ajaxSaga;
