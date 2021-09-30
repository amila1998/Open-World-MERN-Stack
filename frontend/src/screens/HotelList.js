import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createHotel, listHotels, deleteHotel } from '../actions/hotelActions';

//import Sidebar from '../components/AdminSidebar';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { HOTEL_CREATE_RESET, HOTEL_DELETE_RESET } from '../constants/hotelConstants';

export default function HotelList(props) {
    const dispatch = useDispatch();
    const hotelList = useSelector((state) => state.hotelList);
    const { loading, error, hotels } = hotelList;
    
    const hotelCreate = useSelector((state) => state.hotelCreate);
    const {
      loading: loadingCreate,
      error: errorCreate,
      success: successCreate,
      hotel: createdHotel,
    } = hotelCreate;


  const hotelDelete = useSelector((state) => state.hotelDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = hotelDelete;
  
    useEffect(() => {
        if (successCreate) {
          dispatch({ type: HOTEL_CREATE_RESET });
          props.history.push(`/hotel/hotelDetails/${createdHotel._id}/edit`);
        }
        if (successDelete) {
          dispatch({ type: HOTEL_DELETE_RESET });
        }
        dispatch(listHotels());
      }, [createdHotel, dispatch, props.history, successCreate, successDelete]);
      
      const deleteHandler = (hotel) => {
        if (window.confirm('Are you sure to delete?')) {
          dispatch(deleteHotel(hotel._id));
        }
      };
      const createHandler = () => {
        dispatch(createHotel());
      };
  
    return (
        <div>

      <div id="split1">
      <div id="left1">
          
        </div>
        
            <div class="right1">
            <div className="row">
               
              
            <h1>Hotels List</h1>
            <button type="button" className="primary" onClick={createHandler}>
                Add A New Hotel
                </button>
            </div>

            {loadingDelete && <LoadingBox></LoadingBox>}
            {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}
            {loadingCreate && <LoadingBox></LoadingBox>}
            {errorCreate && <MessageBox variant="danger">{errorCreate}</MessageBox>}
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
                   
                        <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {hotels.map((hotel) => (
                        <tr key={hotel._id}>
                            <td>{hotel._id}</td>
                            <td>{hotel.hotelname}</td>
                     
                            <td>{hotel.category}</td>
                          
                            <td>
                            <button
                                type="button"
                                className="small"
                                onClick={() =>
                                props.history.push(`/roomlist/${hotel._id}`)
                                }
                            >
                                {hotel.rooms.length           
                               } Rooms
                            </button>  
                            <button
                                type="button"
                                className="small"
                                onClick={() =>
                                props.history.push(`/hotel/hotelDetails/${hotel._id}/edit`)
                                }
                            >
                                Edit
                            </button>
                            <button
                                type="button"
                                className="small"
                                onClick={() => deleteHandler(hotel)}
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