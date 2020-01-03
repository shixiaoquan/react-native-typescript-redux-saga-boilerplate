import ajax from 'util/ajax';

export const getCars = () =>
  ajax({
    path: '/rnts/cars',
    method: 'GET',
  });
