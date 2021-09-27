import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { hotelCreateReducer, hotelDeleteReducer, hotelDetailsReducer, hotelListReducer, hotelUpdateReducer } from './reducers/hotelReducers';
import { roomCreateReducer, roomDeleteReducer, roomDetailsReducer, roomListReducer, roomUpdateReducer } from './reducers/roomReducers';
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
  roomCreate:roomCreateReducer,
  roomDelete:roomDeleteReducer,
  roomdetail:roomDetailsReducer,
  roomUpdate:roomUpdateReducer,
  userSignin:userSigninReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  hotelCreate: hotelCreateReducer,
  hotelUpdate: hotelUpdateReducer,
  hotelDelete: hotelDeleteReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;