import Axios from 'axios';
import {

  GUIDE_SIGNIN_FAIL,
  GUIDE_SIGNIN_REQUEST,
  GUIDE_SIGNIN_SUCCESS,
  GUIDE_SIGNOUT,

} from '../constants/guideConstants';

export const guidesignin = (gemail, gpassword) => async (dispatch) => {
 
    dispatch({ type: GUIDE_SIGNIN_REQUEST, payload: { gemail, gpassword } });
    try {
      const { gdata } = await Axios.get('http://localhost:8070/guideR/guidesignin', { gemail, gpassword });
      dispatch({ type: GUIDE_SIGNIN_SUCCESS, payload: gdata });
      localStorage.setItem('guideInfo', JSON.stringify(gdata));
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
