import {HomeState, HomeActionTypes, ADD_CAR, GET_CARS_RES} from './type';

const initialState: HomeState = {
  loading: false,
  data: [{name: 'default 脑斯莱斯', price: 2323232}],
};

export function homeReducer(
  state = initialState,
  action: HomeActionTypes,
): HomeState {
  switch (action.type) {
    case ADD_CAR: {
      const data = [...state.data, action.payload];
      return {
        ...state,
        data,
      };
    }
    case GET_CARS_RES: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
}
