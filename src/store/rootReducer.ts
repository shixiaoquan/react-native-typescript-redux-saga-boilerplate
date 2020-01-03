import {combineReducers} from 'redux';

import {homeReducer} from 'store/home/reducer';
import {globalReducer} from 'store/global/reducer';

const rootReducer = combineReducers({
  home: homeReducer,
  global: globalReducer,
});

export default rootReducer;
