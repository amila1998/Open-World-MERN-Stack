import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { mylistHotelbooking } from '../actions/hotelBookAroomAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function MyBookingsScreen(props) {
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

    const listHotelbookingmy = useSelector((state) => state.listHotelbookingmy);
    const { loading, error, hotelbookings } = listHotelbookingmy;
 

    const dispatch = useDispatch();
 /*
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
     // dispatch(deleteRoom(hotelId,roomId)); 
     
    }
  };

  const NavAddRoomHandler = () => {
    props.history.push(`/addARoom/${hotelId}`);
  };*/

  useEffect(() => {
   
    dispatch(mylistHotelbooking(userInfo._id));
    
  }, [dispatch, userInfo._id]);


    return (
        <div>
            <div className="pageBody">
              <h1>  My Hotel Bookings</h1>

                
      
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Hotel ID</th>
              <th>Room ID</th>
              <th>Check In</th>
              <th>Check Out</th>
              <th>Service Provider Acception</th>
              <th>is Paid</th>
              <th>Room Payment</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {hotelbookings.map((book) => (
              <tr key={book._id}>
                <td>{book._id}</td>
                <td>{book.hotel}</td>
                <td>{book.room}</td>
                <td>{book.startDate}</td>
                <td>{book.endDate}</td>
                <td>{book.serviceProviderAcception ? 'YES' : ' NO'}</td>
                <td>{book.ispaid ? 'YES' : ' NO'}</td>
                <td>{"$"}{book.price}</td>
                
                <td>
                  
                <button
                    type="button"
                    className="small"
                    //onClick={() => props.history.push(`/user/${book._id}/edit`)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="small"
                    //onClick={() => deleteHandler(user._id)}
                  >
                    Pay
                  </button>
                  <button
                    type="button"
                    className="small"
                    //onClick={() => deleteHandler(user._id)}
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
    )
}
