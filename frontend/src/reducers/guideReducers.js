import {
    USER_DETAILS_FAIL,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,

    GUIDE_SIGNIN_FAIL,
    GUIDE_SIGNIN_REQUEST,
    GUIDE_SIGNIN_SUCCESS,
    GUIDE_SIGNOUT,
  
  } from '../constants/guideConstants';

  
  
  export const guideSigninReducer = (state = {}, action) => {
    switch (action.type) {
      case GUIDE_SIGNIN_REQUEST:
        return { loading: true };
      case GUIDE_SIGNIN_SUCCESS:
        return { loading: false, guideInfo: action.payload };
      case GUIDE_SIGNIN_FAIL:
        return { loading: false, error: action.payload };
      case GUIDE_SIGNOUT:
        return {

        };
      default:
        return state;
    }
  };