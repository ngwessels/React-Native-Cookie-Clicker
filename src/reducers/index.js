import { combineReducers } from 'redux';

import cookieCount from './cookieCount';



const rootReducer = combineReducers({
  cookieCount: cookieCount,
})

export default rootReducer;
