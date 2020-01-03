import {ADD_CAR, GET_CARS_REQ, Car} from './type';

export function addCar(car: Car) {
  return {
    type: ADD_CAR,
    payload: car,
  };
}
export function getCars() {
  return {
    type: GET_CARS_REQ,
  };
}
