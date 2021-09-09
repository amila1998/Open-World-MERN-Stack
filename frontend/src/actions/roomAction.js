import Axios from 'axios';

import {
  ROOM_DETAILS_FAIL,
  ROOM_DETAILS_REQUEST,
  ROOM_DETAILS_SUCCESS,
  ROOM_LIST_FAIL,
  ROOM_LIST_REQUEST,
  ROOM_LIST_SUCCESS,
} from '../constants/roomConstants';

export const listRooms = () => async (dispatch) => {
  dispatch({
    type: ROOM_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get('http://localhost:8070/roomR//displayAllRooms');
    dispatch({ type: ROOM_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ROOM_LIST_FAIL, payload: error.message });
  }
};

export const detailRoom = (roomId) => async(dispatch) => {
  dispatch({ type: ROOM_DETAILS_REQUEST, payload: roomId });
  try{
    const{data}=await Axios.get(`http://localhost:8070/roomR/RoombyId/${roomId}`);
    dispatch({type:ROOM_DETAILS_SUCCESS, payload:data});
  }catch(error){
    dispatch({type: ROOM_DETAILS_FAIL, payload:error.response && error.response.data.message
      ? error.response.data.message
      :error.message,
    });
  }
};