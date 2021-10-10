import Axios from 'axios';
import { HSP_DELETE_FAIL, HSP_DELETE_REQUEST, HSP_DELETE_SUCCESS, HSP_DETAILS_FAIL, HSP_DETAILS_REQUEST, HSP_DETAILS_SUCCESS, HSP_REGISTER_FAIL, HSP_REGISTER_REQUEST, HSP_REGISTER_SUCCESS, HSP_UPDATE_PROFILE_FAIL, HSP_UPDATE_PROFILE_REQUEST, HSP_UPDATE_PROFILE_SUCCESS } from '../constants/hotelSpConstants';


  
  export const deletehsp = (userId) => async (dispatch, getState) => {
    dispatch({ type: HSP_DELETE_REQUEST, payload: userId });
    
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.delete(`http://localhost:8070/userR/delete/${userId}`, {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      });
      dispatch({ type: HSP_DELETE_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: HSP_DELETE_FAIL, payload: message });
    }
  };

  
export const registerhsp = (firstname, lastname, logo,description,userID) => async (dispatch) => {
    dispatch({ type: HSP_REGISTER_REQUEST});
   
    try {
      const { data } = await Axios.put(`http://localhost:8070/hspR/registerSP/${userID}`, {
        firstname, lastname, logo,description
      },
      );
      dispatch({ type: HSP_REGISTER_SUCCESS, payload: data });
     
      //localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: HSP_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  
  export const detailshsp = (userId) => async (dispatch, getState) => {
    dispatch({ type: HSP_DETAILS_REQUEST, payload: userId });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.get(`http://localhost:8070//hspR/userfindbyid/${userId}`, {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      });
      dispatch({ type: HSP_DETAILS_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: HSP_DETAILS_FAIL, payload: message });
    }
  };
  
  export const updatehspProfile = (user) => async (dispatch, getState) => {
    dispatch({ type: HSP_UPDATE_PROFILE_REQUEST, payload: user });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.put(`http://localhost:8070/userR/updateUser/${user.userId}`, user, {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      });
      dispatch({ type: HSP_UPDATE_PROFILE_SUCCESS, payload: data });
      
      localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: HSP_UPDATE_PROFILE_FAIL, payload: message });
    }
  };