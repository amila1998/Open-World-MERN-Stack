import Axios from 'axios';

import {
  HOTEL_DETAILS_FAIL,
  HOTEL_DETAILS_REQUEST,
  HOTEL_DETAILS_SUCCESS,
  HOTEL_LIST_FAIL,
  HOTEL_LIST_REQUEST,
  HOTEL_LIST_SUCCESS,
  HOTEL_CREATE_FAIL,
  HOTEL_CREATE_REQUEST,
  HOTEL_CREATE_SUCCESS,
  HOTEL_UPDATE_REQUEST,
  HOTEL_UPDATE_SUCCESS,
  HOTEL_UPDATE_FAIL,
  HOTEL_DELETE_REQUEST,
  HOTEL_DELETE_FAIL,
  HOTEL_DELETE_SUCCESS,
} from '../constants/hotelConstants';

export const listHotels = () => async (dispatch) => {
  dispatch({
    type: HOTEL_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`http://localhost:8070/hotelR/displayAll`);
    dispatch({ type: HOTEL_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: HOTEL_LIST_FAIL, payload: error.message });
  }
};

export const detailHotel = (hotelId) => async(dispatch) => {
  dispatch({ type: HOTEL_DETAILS_REQUEST, payload: hotelId });
  try{
    const{data}=await Axios.get(`http://localhost:8070/hotelR/fetechHotelbyId/${hotelId}`);
    dispatch({type:HOTEL_DETAILS_SUCCESS, payload:data});
  }catch(error){
    dispatch({type: HOTEL_DETAILS_FAIL, payload:error.response && error.response.data.message
      ? error.response.data.message
      :error.message,
    });
  }
};

export const createHotel = () => async (dispatch, getState) => {
  dispatch({ type: HOTEL_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      'http://localhost:8070/hotelR/add',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type: HOTEL_CREATE_SUCCESS,
      payload: data.hotel,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: HOTEL_CREATE_FAIL, payload: message });
  }
};

export const updateHotel = (hotel) => async (dispatch, getState) => {
  dispatch({ type: HOTEL_UPDATE_REQUEST, payload: hotel });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`http://localhost:8070/hotelR/update/${hotel._id}`, hotel, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: HOTEL_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: HOTEL_UPDATE_FAIL, error: message });
  }
};

export const deleteHotel = (hotelId) => async (dispatch, getState) => {
  dispatch({ type: HOTEL_DELETE_REQUEST, payload: hotelId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = Axios.delete(`http://localhost:8070/hotelR/delete/${hotelId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: HOTEL_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: HOTEL_DELETE_FAIL, payload: message });
  }
};



