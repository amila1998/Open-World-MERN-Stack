const {
    HOTEL_LIST_REQUEST,
    HOTEL_LIST_SUCCESS,
    HOTEL_LIST_FAIL,
    HOTEL_DETAILS_REQUEST,
    HOTEL_DETAILS_SUCCESS,
    HOTEL_DETAILS_FAIL,
    HOTEL_CREATE_REQUEST,
    HOTEL_CREATE_SUCCESS,
    HOTEL_CREATE_FAIL,
    HOTEL_CREATE_RESET,
    HOTEL_UPDATE_REQUEST,
    HOTEL_UPDATE_SUCCESS,
    HOTEL_UPDATE_FAIL,
    HOTEL_UPDATE_RESET,
    HOTEL_DELETE_REQUEST,
    HOTEL_DELETE_SUCCESS,
    HOTEL_DELETE_FAIL,
    HOTEL_DELETE_RESET,
  } = require('../constants/hotelConstants');
  
  export const hotelListReducer = (state = { loading: true }, action) => {
    switch (action.type) {
      case HOTEL_LIST_REQUEST:
        return { loading: true };
      case HOTEL_LIST_SUCCESS:
        return { loading: false, hotels: action.payload };
      case HOTEL_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export const hotelDetailsReducer =(state = { hotel:{},loading: true},
    action
  )=>{
      switch (action.type){
        case HOTEL_DETAILS_REQUEST:
          return{loading: true};
        case HOTEL_DETAILS_SUCCESS:
          return{loading: false, hotel: action.payload};
        case HOTEL_DETAILS_FAIL:
          return {loading: false, error: action.payload};
        default:
          return state;
      }

  };

  export const hotelCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case HOTEL_CREATE_REQUEST:
        return { loading: true };
      case HOTEL_CREATE_SUCCESS:
        return { loading: false, success: true, hotel: action.payload };
      case HOTEL_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case HOTEL_CREATE_RESET:
        return {};
      default:
        return state;
    }
  };

  export const hotelUpdateReducer = (state = {}, action) => {
    switch (action.type) {
      case HOTEL_UPDATE_REQUEST:
        return { loading: true };
      case HOTEL_UPDATE_SUCCESS:
        return { loading: false, success: true };
      case HOTEL_UPDATE_FAIL:
        return { loading: false, error: action.payload };
      case HOTEL_UPDATE_RESET:
        return {};
      default:
        return state;
    }
  };

  export const hotelDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case HOTEL_DELETE_REQUEST:
        return { loading: true };
      case HOTEL_DELETE_SUCCESS:
        return { loading: false, success: true };
      case HOTEL_DELETE_FAIL:
        return { loading: false, error: action.payload };
      case HOTEL_DELETE_RESET:
        return {};
      default:
        return state;
    }
  };