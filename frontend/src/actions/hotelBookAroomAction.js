import Axios from 'axios';
import { HOTELBOOKING_CREATE_FAIL, HOTELBOOKING_CREATE_REQUEST, HOTELBOOKING_CREATE_SUCCESS, HOTELBOOKING_DAYS_FAIL, HOTELBOOKING_DAYS_REQUEST, HOTELBOOKING_DAYS_SUCCESS, HOTELBOOKING_DELETE_FAIL, HOTELBOOKING_DELETE_REQUEST, HOTELBOOKING_DELETE_SUCCESS, HOTELBOOKING_DETAILS_FAIL, HOTELBOOKING_DETAILS_REQUEST, HOTELBOOKING_DETAILS_SUCCESS, HOTELBOOKING_LIST_FAIL, HOTELBOOKING_LIST_REQUEST, HOTELBOOKING_LIST_SUCCESS, HOTELBOOKING_UPDATE_FAIL, HOTELBOOKING_UPDATE_REQUEST, HOTELBOOKING_UPDATE_SUCCESS } from '../constants/hotelbookingConstants';


export const listHotelbooking = () => async (dispatch) => {
  dispatch({
    type: HOTELBOOKING_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(``);
    dispatch({ type: HOTELBOOKING_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: HOTELBOOKING_LIST_FAIL, payload: error.message });
  }
};

export const detailsOneHotelRoombooking = (roomId) => async(dispatch) => {
  dispatch({ type: HOTELBOOKING_DETAILS_REQUEST, payload: roomId });
  try{
    const{data}=await Axios.get(`http://localhost:8070/hotelbookingR/getAllforOneRoom/${roomId}`);
    dispatch({type:HOTELBOOKING_DETAILS_SUCCESS, payload:data});
  }catch(error){
    dispatch({type: HOTELBOOKING_DETAILS_FAIL, payload:error.response && error.response.data.message
      ? error.response.data.message
      :error.message,
    });
  }
};

export const DayshotelBooking = (roomId,hotelId) => async(dispatch) => {
  dispatch({ type: HOTELBOOKING_DAYS_REQUEST, payload: roomId });
  try{
    const{data}=await Axios.get(`http://localhost:8070/hotelbookingR/getAllDaysforOneRoom/${roomId}/${hotelId}`);
    dispatch({type:HOTELBOOKING_DAYS_SUCCESS, payload:data});
  }catch(error){
    dispatch({type: HOTELBOOKING_DAYS_FAIL, payload:error.response && error.response.data.message
      ? error.response.data.message
      :error.message,
    });
  }
};

export const createHotelbooking = (hotel,
    room,
    startDate,
    endDate,
    price,
    message,
    userID) => async (dispatch, getState) => {
  dispatch({ type: HOTELBOOKING_CREATE_REQUEST });
  const {
            userSignin: { userInfo },
        } = getState();
  try {
    const { data } = await Axios.post(
      'http://localhost:8070/hotelbookingR/addaHotelRoomBooking',
      {
        hotel,
        room,
        startDate,
        endDate,
        price,
        message,
        userID
      },
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type: HOTELBOOKING_CREATE_SUCCESS,
      payload: data.hotelbook,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: HOTELBOOKING_CREATE_FAIL, payload: message });
  }
};

export const updateHotel = (hotel) => async (dispatch, getState) => {
  dispatch({ type: HOTELBOOKING_UPDATE_REQUEST, payload: hotel });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`http://localhost:8070/hotelR/update/${hotel._id}`, hotel, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: HOTELBOOKING_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: HOTELBOOKING_UPDATE_FAIL, error: message });
  }
};

export const deleteHotel = (hotelId) => async (dispatch, getState) => {
  dispatch({ type: HOTELBOOKING_DELETE_REQUEST, payload: hotelId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = Axios.delete(`http://localhost:8070/hotelR/delete/${hotelId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: HOTELBOOKING_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: HOTELBOOKING_DELETE_FAIL, payload: message });
  }
};



