import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listHotels } from '../actions/hotelActions';
import Sidebar from '../components/AdminSidebar';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function AdminHotelList() {
    const dispatch = useDispatch();
    const hotelList = useSelector((state) => state.hotelList);
    const { loading, error, hotels } = hotelList;
  
    useEffect(() => {
      dispatch(listHotels());
    }, [dispatch]);
    const deleteHandler = () => {
        /// TODO: dispatch delete action
      };
  
    return (
        <div>

      <div id="split1">
      <div id="left1">
          <Sidebar/>
        </div>
        
            <div class="right1">
            <h1>Hotels List</h1>
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
                                this.props.history.push(`/hotel/${hotel._id}/edit`)
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