import Axios from 'axios';

import {
  HOTEL_DETAILS_FAIL,
  HOTEL_DETAILS_REQUEST,
  HOTEL_DETAILS_SUCCESS,
  HOTEL_LIST_FAIL,
  HOTEL_LIST_REQUEST,
  HOTEL_LIST_SUCCESS,
} from '../constants/hotelConstants';

export const listHotels = () => async (dispatch) => {
  dispatch({
    type: HOTEL_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get('http://localhost:8070/hotelR/displayAll');
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
}