import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createHotel, deleteHotel, listHotelsforhsp } from '../actions/hotelActions';
import Sidebar from '../components/HotelServiceProviderSidebar';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { HOTEL_CREATE_RESET, HOTEL_DELETE_RESET } from '../constants/hotelConstants';

export default function MyHotelsScreen(props) {
    const dispatch = useDispatch();
    const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
    const hotelListforhsp = useSelector((state) => state.hotelListforhsp);
    const { loading, error, hotels } = hotelListforhsp;
    
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
          props.history.push(`/hotel/hotelDetails/${createdHotel._id}/edit/hsp`);
        }
        if (successDelete) {
          dispatch({ type: HOTEL_DELETE_RESET });
        }
        dispatch(listHotelsforhsp(userInfo._id));
      }, [createdHotel, dispatch, props.history, successCreate, successDelete, userInfo._id]);
      
      const deleteHandler = (hotel) => {
        if (window.confirm('Are you sure to delete?')) {
          dispatch(deleteHotel(hotel._id));
        }
      };
      const createHandler = () => {
        dispatch(createHotel());
      };
    return (
        <div >
            <div id="split1">
            <div id="left1">
     
           <Sidebar/>
        
            </div>
        
            <div className="right1 pageBody">
            <div className="row">
               
              
            <h1> My Hotels</h1>
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
                                props.history.push(`/myroomlist/${hotel._id}`)
                                }
                            >
                                {hotel.rooms.length           
                               } Rooms
                            </button>  
                            <button
                                type="button"
                                className="small"
                                onClick={() =>
                                props.history.push(`/hotel/hotelDetails/${hotel._id}/edit/hsp`)
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
    )
}
