import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { hotelDetailsReducer, hotelListReducer } from './reducers/hotelReducers';
import { roomDetailsReducer, roomListReducer } from './reducers/roomReducers';
import { userRegisterReducer, userSigninReducer, userDetailsReducer, userUpdateProfileReducer } from './reducers/userReducers';

const initialState = {
  userSignin: {
    userInfo: localStorage.getItem('userInfo')
      ? JSON.parse(localStorage.getItem('userInfo'))
      : null,
  },
 
  
};
const reducer = combineReducers({
  hotelList: hotelListReducer,
  hoteldetail:hotelDetailsReducer,
  roomList:roomListReducer,
  roomdetail:roomDetailsReducer,
  userSignin:userSigninReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;