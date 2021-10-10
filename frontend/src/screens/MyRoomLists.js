import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteRoom, listRooms } from '../actions/roomAction';

//import Sidebar from '../components/AdminSidebar';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Sidebar from '../components/HotelServiceProviderSidebar';
import { ROOM_CREATE_RESET, ROOM_DELETE_RESET } from '../constants/roomConstants';


export default function MyRoomList(props) {
  const hotelId = props.match.params.hotelId;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
 
    const roomList = useSelector((state) => state.roomList);
    const { loading, error, rooms } = roomList;
 

    const dispatch = useDispatch();
 
  const roomCreate = useSelector((state) => state.roomCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
  } = roomCreate;

  const roomDelete = useSelector((state) => state.roomDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successRDelete,
  } = roomDelete;
  
  const deleteroomHandler = (roomId) => {
    if (window.confirm('Are you sure to delete?')) {
      dispatch(deleteRoom(hotelId,roomId)); 
     
    }
  };

  const NavAddRoomHandler = () => {
    props.history.push(`/addARoom/${hotelId}/hsp`);
  };

  useEffect(() => {
    
    if (successCreate) {
      dispatch({ type: ROOM_CREATE_RESET });
    }
    if (successRDelete) {
     
      dispatch({ type: ROOM_DELETE_RESET });
      
    }
    dispatch(listRooms(hotelId));
    
  }, [dispatch, hotelId, successCreate, successRDelete]);
      
      
  
    return (
        <div>

      <div id="split1">
      <div id="left1">
      {userInfo.isAdmin &&(
            <Sidebar/>
          )}
        </div>
        
            <div class="right1 pageBody">
            <div className="row">
               
              
            <h1> Room List</h1>
            <>
             <div> <button type="button" className="primary" onClick={NavAddRoomHandler}>
               Add New Room
              </button></div></>
            
            </div>
            
            {loadingCreate && <LoadingBox></LoadingBox>}
            {errorCreate && <MessageBox variant="danger">{errorDelete}</MessageBox>}
            {successCreate && <MessageBox variant="danger">{successCreate}</MessageBox>}
            {loadingDelete && <LoadingBox></LoadingBox>}
            {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}
            
                {loading ? (
                    <LoadingBox></LoadingBox>
                ) : error ? (
                    <MessageBox variant="danger">{error}</MessageBox>
                ) : (
                    <table id="myTable">
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>NAME</th>
                 
                        <th>CATEGORY</th>
                        <th>AVALABILITY</th>
                        <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rooms.map((room) => (
                        <tr key={room._id}>
                            <td>{room._id}</td>
                            <td>{room.roomname}</td>
                           
                            <td>{room.category}</td>
                            <td>{room.avalability ? 'YES' : ' NO'}</td>
                            <td>
                           
                            <button
                                type="button"
                                className="small"
                                onClick={() =>
                                props.history.push(`/room/${hotelId}/roomDetails/${room._id}/edit/hsp`)
                                }
                            >
                                Edit
                            </button>
                            <button
                                type="button"
                                className="small"
                                onClick={() => deleteroomHandler(room)}
                            >
                                Delete
                            </button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                )}
            </div>
    </div>
    </div>
   
  );
}