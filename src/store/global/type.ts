/*
 * @Author: ShiQuan
 * @Date: 2020-01-02 14:45:25
 * @Last Modified by: ShiQuan
 * @Last Modified time: 2020-01-02 16:40:51
 */

export interface GlobalState {
  toast: {
    visible?: boolean;
    duration?: number;
    content: string;
  };
}

export interface Toast {
  visible?: boolean;
  duration?: number;
  content: string;
}

export const SHOW_TOAST = 'SHOW_TOAST';
export interface ShowToastAction {
  type: typeof SHOW_TOAST;
  payload: Toast;
}

export const HIDE_TOAST = 'HIDE_TOAST';
interface HideToastAction {
  type: typeof HIDE_TOAST;
  payload?: Toast;
}

export type GlobalActionTypes = ShowToastAction | HideToastAction;
