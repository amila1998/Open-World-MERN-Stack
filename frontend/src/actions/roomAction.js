import Axios from 'axios';
import { HOTEL_DETAILS_REQUEST, HOTEL_DETAILS_SUCCESS } from '../constants/hotelConstants';

import {
  
  ROOM_DETAILS_REQUEST,
  ROOM_DETAILS_SUCCESS,
  ROOM_DETAILS_FAIL,
  
  ROOM_LIST_REQUEST,
  ROOM_LIST_SUCCESS,
  ROOM_LIST_FAIL,
} from '../constants/roomConstants';

export const listRooms = ({ hotel = '' }) => async (dispatch) => {
  dispatch({
    type: ROOM_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`http://localhost:8070/roomR/displayAllRooms?hotel=${hotel}`);
    dispatch({ type: ROOM_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ROOM_LIST_FAIL, payload: error.message });
  }
};

export const detailRoom = (hotelId,roomId) => async(dispatch) => {
 
  dispatch({ type: ROOM_DETAILS_REQUEST, payload: roomId,hotelId });
  try{
    const{data}=await Axios.get(`http://localhost:8070/roomR/${hotelId}/RoombyId/${roomId}`);
    ;
    dispatch({type:ROOM_DETAILS_SUCCESS, payload:data});
  }catch(error){
    dispatch({type: ROOM_DETAILS_FAIL, payload:error.response && error.response.data.message
      ? error.response.data.message
      :error.message,
    });
  }
};