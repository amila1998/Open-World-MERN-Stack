const {

  ROOM_LIST_REQUEST, ROOM_LIST_SUCCESS, ROOM_LIST_FAIL, ROOM_DETAILS_REQUEST, ROOM_DETAILS_SUCCESS, ROOM_DETAILS_FAIL,
} = require('../constants/roomConstants');

export const roomListReducer = (
  state = { loading: true, rooms: [] },
  action
) => {
  switch (action.type) {
    case ROOM_LIST_REQUEST:
      return { loading: true };
    case ROOM_LIST_SUCCESS:
      return { loading: false, rooms: action.payload };
    case ROOM_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const roomDetailsReducer =(state = { room:{},loading: true},
  action
)=>{
    switch (action.type){
      case ROOM_DETAILS_REQUEST:
        return{loading: true};
      case ROOM_DETAILS_SUCCESS:
        return{loading: false, room: action.payload};
      case ROOM_DETAILS_FAIL:
        return {loading: false, error: action.payload};
      default:
        return state;
    }

};