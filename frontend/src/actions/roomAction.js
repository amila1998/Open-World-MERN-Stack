import Axios from 'axios';


import {
  
  ROOM_DETAILS_REQUEST,
  ROOM_DETAILS_SUCCESS,
  ROOM_DETAILS_FAIL,
  
  ROOM_LIST_REQUEST,
  ROOM_LIST_SUCCESS,
  ROOM_LIST_FAIL,

  ROOM_CREATE_SUCCESS,
  ROOM_CREATE_REQUEST,
  ROOM_CREATE_FAIL,

  ROOM_DELETE_REQUEST,
  ROOM_DELETE_SUCCESS,
  ROOM_DELETE_FAIL,

  ROOM_UPDATE_REQUEST,
  ROOM_UPDATE_SUCCESS,
  ROOM_UPDATE_FAIL,
  ROOM_DETAILSWITHDAYS_REQUEST,
  ROOM_DETAILSWITHDAYS_SUCCESS,
  ROOM_DETAILSWITHDAYS_FAIL,
} from '../constants/roomConstants';

export const listRooms = (hotelId) => async (dispatch) => {
  dispatch({
    type: ROOM_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`http://localhost:8070/roomR/displayAllRooms/${hotelId}`);
    dispatch({ type: ROOM_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ROOM_LIST_FAIL, payload: error.message });
  }
};

export const detailRoom = (hotelId,roomId) => async(dispatch) => {
 
  dispatch({ type: ROOM_DETAILS_REQUEST, payload: roomId,hotelId });
  
  try{
    const{data}=await Axios.get(`http://localhost:8070/roomR/${hotelId}/FindARoom/${roomId}`);
    ;
    dispatch({type:ROOM_DETAILS_SUCCESS, payload:data});
  }catch(error){
    dispatch({type: ROOM_DETAILS_FAIL, payload:error.response && error.response.data.message
      ? error.response.data.message
      :error.message,
    });
  }
};

export const detailRoomWithDays = (hotelId,roomId) => async(dispatch) => {
 
  dispatch({ type: ROOM_DETAILSWITHDAYS_REQUEST, payload: roomId,hotelId });
  
  try{
    const{data}=await Axios.get(`http://localhost:8070/roomR/${hotelId}/FindARoomwithdays/${roomId}`);
    ;
    dispatch({type:ROOM_DETAILSWITHDAYS_SUCCESS, payload:data});
  }catch(error){
    dispatch({type: ROOM_DETAILSWITHDAYS_FAIL, payload:error.response && error.response.data.message
      ? error.response.data.message
      :error.message,
    });
  }
};


export const createRoom = (roomname,
  price,
  hotelId,
  description,
  image1,
  category) => async (dispatch, getState) => {
  dispatch({ type: ROOM_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      `http://localhost:8070/roomR/addroom/${hotelId}`,
      {
      roomname,
      price,
      hotelId,
      description,
      image1,
      category
      },
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type: ROOM_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: ROOM_CREATE_FAIL, payload: message });
  }
};


export const deleteRoom = (hotelId, roomId) => async (dispatch, getState) => {
  dispatch({ type: ROOM_DELETE_REQUEST, payload: hotelId,roomId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = Axios.delete(`http://localhost:8070/roomR/${hotelId}/deleteRoom/${roomId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: ROOM_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: ROOM_DELETE_FAIL, payload: message });
  }
};


export const updateRoom = (room) => async (dispatch, getState) => {
  dispatch({ type: ROOM_UPDATE_REQUEST, payload: room });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`http://localhost:8070/roomR/${room.hotel}/updateRoom/${room._id}`, room, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: ROOM_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: ROOM_UPDATE_FAIL, error: message });
  }
};