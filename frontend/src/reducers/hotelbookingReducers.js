const {
    HOTELBOOKING_LIST_REQUEST,
    HOTELBOOKING_LIST_SUCCESS,
    HOTELBOOKING_LIST_FAIL,
    HOTELBOOKING_DETAILS_REQUEST,
    HOTELBOOKING_DETAILS_SUCCESS,
    HOTELBOOKING_DETAILS_FAIL,
    HOTELBOOKING_CREATE_REQUEST,
    HOTELBOOKING_CREATE_SUCCESS,
    HOTELBOOKING_CREATE_FAIL,
    HOTELBOOKING_CREATE_RESET,
    HOTELBOOKING_UPDATE_REQUEST,
    HOTELBOOKING_UPDATE_SUCCESS,
    HOTELBOOKING_UPDATE_FAIL,
    HOTELBOOKING_UPDATE_RESET,
    HOTELBOOKING_DELETE_REQUEST,
    HOTELBOOKING_DELETE_SUCCESS,
    HOTELBOOKING_DELETE_FAIL,
    HOTELBOOKING_DELETE_RESET,
    HOTELBOOKING_DAYS_REQUEST,
    HOTELBOOKING_DAYS_SUCCESS,
    HOTELBOOKING_DAYS_FAIL,
    MYHOTELBOOKING_LIST_REQUEST,
    MYHOTELBOOKING_LIST_SUCCESS,
    MYHOTELBOOKING_LIST_FAIL,
    
  } = require('../constants/hotelbookingConstants');
  
  export const myhotelBookingListReducer = (state = { loading: true }, action) => {
    switch (action.type) {
      case MYHOTELBOOKING_LIST_REQUEST:
        return { loading: true };
      case MYHOTELBOOKING_LIST_SUCCESS:
        return { loading: false, hotelbookings: action.payload };
      case MYHOTELBOOKING_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export const hotelBookingDetailsReducer =(state = { hotelbooking:{},loading: true},
    action
  )=>{
      switch (action.type){
        case HOTELBOOKING_DETAILS_REQUEST:
          return{loading: true};
        case HOTELBOOKING_DETAILS_SUCCESS:
          return{loading: false, hotelbookdetails: action.payload};
        case HOTELBOOKING_DETAILS_FAIL:
          return {loading: false, error: action.payload};
        default:
          return state;
      }

  };

  export const hotelBookingDaysReducer =(state = { hotelbookdays:{},loading: true},
    action
  )=>{
      switch (action.type){
        case HOTELBOOKING_DAYS_REQUEST:
          return{loading: true};
        case HOTELBOOKING_DAYS_SUCCESS:
          return{loading: false, hotelbookdays: action.payload};
        case HOTELBOOKING_DAYS_FAIL:
          return {loading: false, error: action.payload};
        default:
          return state;
      }

  };

  export const hotelBookingCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case HOTELBOOKING_CREATE_REQUEST:
        return { loading: true };
      case HOTELBOOKING_CREATE_SUCCESS:
        return { loading: false, success: true, hotelbook: action.payload };
      case HOTELBOOKING_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case HOTELBOOKING_CREATE_RESET:
        return {};
      default:
        return state;
    }
  };

  export const hotelBookingUpdateReducer = (state = {}, action) => {
    switch (action.type) {
      case HOTELBOOKING_UPDATE_REQUEST:
        return { loading: true };
      case HOTELBOOKING_UPDATE_SUCCESS:
        return { loading: false, success: true };
      case HOTELBOOKING_UPDATE_FAIL:
        return { loading: false, error: action.payload };
      case HOTELBOOKING_UPDATE_RESET:
        return {};
      default:
        return state;
    }
  };

  export const hotelBookingDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case HOTELBOOKING_DELETE_REQUEST:
        return { loading: true };
      case HOTELBOOKING_DELETE_SUCCESS:
        return { loading: false, success: true };
      case HOTELBOOKING_DELETE_FAIL:
        return { loading: false, error: action.payload };
      case HOTELBOOKING_DELETE_RESET:
        return {};
      default:
        return state;
    }
  };