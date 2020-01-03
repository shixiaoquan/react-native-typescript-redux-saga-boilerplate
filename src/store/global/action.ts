import {Toast, SHOW_TOAST, HIDE_TOAST} from './type';

export function showToast(toast: Toast) {
  return {
    type: SHOW_TOAST,
    payload: toast,
  };
}
export function hideToast() {
  return {
    type: HIDE_TOAST,
  };
}
