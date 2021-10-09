import{
    HSP_REGISTER_REQUEST,
   HSP_REGISTER_SUCCESS,
   HSP_REGISTER_FAIL,
   HSP_DETAILS_REQUEST,
   HSP_DETAILS_SUCCESS,
   HSP_DETAILS_RESET,
   HSP_DETAILS_FAIL,
   HSP_UPDATE_PROFILE_REQUEST,
   HSP_UPDATE_PROFILE_SUCCESS,
   HSP_UPDATE_PROFILE_FAIL,
   HSP_UPDATE_PROFILE_RESET,
   HSP_DELETE_REQUEST,
   HSP_DELETE_SUCCESS,
   HSP_DELETE_FAIL,
   HSP_DELETE_RESET,
    
}from '../constants/hotelSpConstants.js';


  export const hspDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case HSP_DELETE_REQUEST:
        return { loading: true };
      case HSP_DELETE_SUCCESS:
        return { loading: false, success: true };
      case HSP_DELETE_FAIL:
        return { loading: false, error: action.payload };
      case HSP_DELETE_RESET:
        return {};
      default:
        return state;
    }
  };

  export const hspRegisterReducer = (state = {}, action) => {
    switch (action.type) {
      case HSP_REGISTER_REQUEST:
        return { loading: true };
      case HSP_REGISTER_SUCCESS:
        return { loading: false, successhsp: true, hsp: action.payload };
      case HSP_REGISTER_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export const hspDetailsReducer = (state = { loading: true }, action) => {
    switch (action.type) {
      case HSP_DETAILS_REQUEST:
        return { loading: true };
      case HSP_DETAILS_SUCCESS:
        return { loading: false, hsp: action.payload };
      case HSP_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      case HSP_DETAILS_RESET:
          return { loading: true };
      default:
        return state;
    }
  };

  export const hspUpdateProfileReducer = (state = {}, action) => {
    switch (action.type) {
      case HSP_UPDATE_PROFILE_REQUEST:
        return { loading: true };
      case HSP_UPDATE_PROFILE_SUCCESS:
        return { loading: false, success: true };
      case HSP_UPDATE_PROFILE_FAIL:
        return { loading: false, error: action.payload };
      case HSP_UPDATE_PROFILE_RESET:
        return {};
      default:
        return state;
    }
  };