import Axios from 'axios';
import {

  GUIDE_SIGNIN_FAIL,
  GUIDE_SIGNIN_REQUEST,
  GUIDE_SIGNIN_SUCCESS,
  GUIDE_SIGNOUT,

} from '../constants/guideConstants';

export const guidesignin = (email, password) => async (dispatch) => {
  dispatch({ type: GUIDE_SIGNIN_REQUEST, payload: { email, password } });
  try {
    const { data } = Axios.get('http://localhost:8070/guideR/guidesignin', { email, password });
    dispatch({ type: GUIDE_SIGNIN_SUCCESS, payload: data });
    localStorage.setItem('guideInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: GUIDE_SIGNIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const guidesignout = () => (dispatch) => {
  localStorage.removeItem('guideInfo');
  //localStorage.removeItem('cartItems');
  
  dispatch({ type: GUIDE_SIGNOUT });
  

};
