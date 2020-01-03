import {GlobalState, GlobalActionTypes, SHOW_TOAST, HIDE_TOAST} from './type';

const initialState: GlobalState = {
  toast: {
    visible: false,
    duration: 2000,
    content: '',
  },
};

export function globalReducer(
  state = initialState,
  action: GlobalActionTypes,
): GlobalState {
  switch (action.type) {
    case SHOW_TOAST: {
      return {
        ...state,
        toast: {
          ...state.toast,
          visible: true,
          ...action.payload,
        },
      };
    }
    case HIDE_TOAST: {
      return {
        ...state,
        toast: {...initialState.toast},
      };
    }
    default:
      return state;
  }
}
