import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { guideSigninReducer } from './reducers/guideReducers';
import { hotelBookingCreateReducer, hotelBookingDaysReducer, hotelBookingDetailsReducer } from './reducers/hotelbookingReducers';
import { hotelCreateReducer, hotelDeleteReducer, hotelDetailsReducer, hotelListReducer, hotelUpdateReducer } from './reducers/hotelReducers';
import { hspRegisterReducer } from './reducers/hotelSPReducers';
import { roomCreateReducer, roomDeleteReducer, roomDetailseWithdaysReducer, roomDetailsReducer, roomListReducer, roomUpdateReducer } from './reducers/roomReducers';
import { userRegisterReducer, userSigninReducer, userDetailsReducer, userUpdateProfileReducer, userListReducer, userDeleteReducer, userUpdateReducer } from './reducers/userReducers';

const initialState = {
  userSignin: {
    userInfo: localStorage.getItem('userInfo')
      ? JSON.parse(localStorage.getItem('userInfo'))
      : null,
   /* guideInfo: localStorage.getItem('guideInfo')
      ? JSON.parse(localStorage.getItem('guideInfo'))
      : null,*/
   
  },
 
 
 
 
  
};
const reducer = combineReducers({
  OneHotelRoombookingdetails:hotelBookingDetailsReducer,
  HotelbookingCreate:hotelBookingCreateReducer,
  hotelBookingDays:hotelBookingDaysReducer,
  roomdetailwithdays:roomDetailseWithdaysReducer,

  hspRegister:hspRegisterReducer,
  
  roomList:roomListReducer,
  roomCreate:roomCreateReducer,
  roomDelete:roomDeleteReducer,
  roomdetail:roomDetailsReducer,
  roomUpdate:roomUpdateReducer,
  
  userSignin:userSigninReducer,
  
  guideSignin:guideSigninReducer,
  
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,
  userList: userListReducer,
  userUpdateProfile: userUpdateProfileReducer,

  hotelList: hotelListReducer,
  hoteldetail:hotelDetailsReducer,
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