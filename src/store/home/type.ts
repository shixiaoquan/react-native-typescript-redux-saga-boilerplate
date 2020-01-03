// Describing the shape of the system's slice of state
export interface HomeState {
  loading: boolean;
  data: Array<Car>;
}

export interface Car {
  name: string;
  price: number;
}

export const ADD_CAR = 'GET_CAR';
interface AddCarAction {
  type: typeof ADD_CAR;
  payload: Car;
}

export const GET_CARS_REQ = 'GET_CARS_REQ';
export const GET_CARS_RES = 'GET_CARS_RES';
interface GetCarsReqAction {
  type: typeof GET_CARS_REQ;
  payload?: object;
}
interface GetCarsResAction {
  type: typeof GET_CARS_RES;
  payload?: object;
}

export type HomeActionTypes =
  | AddCarAction
  | GetCarsReqAction
  | GetCarsResAction;
