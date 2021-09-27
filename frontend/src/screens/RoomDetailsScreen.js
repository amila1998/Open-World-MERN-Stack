//import react from 'react';
//import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { detailRoom } from '../actions/roomAction';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

//import data from '../data';


export default function RoomDetailsScreen(props){
 
  const hotelId = props.match.params.hotelId;
  const roomId = props.match.params.roomId;

  const roomdetail = useSelector((state) => state.roomdetail);
  const { loading, error, room } = roomdetail;
 


  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailRoom(hotelId,roomId));
    
  }, [dispatch, hotelId,roomId]);
    
  return (
    <div id="split2">
        {loading ? (
      <LoadingBox></LoadingBox>
    ) : error ? (
      <MessageBox variant="danger">{error}</MessageBox>
    ) : (
     <>
      <div id="left2">
      <div className="col-1">
          <Link to="/rooms">Back to result</Link>
          <div className="row top">
        <div className="col-2">
          <img className="large" src={room.image} alt={room.roomname}></img>
        </div>
        <div className="col-1">
          <ul>
            <li>
              
              <h1>Room Name:  {room.roomname}</h1>
            </li>
            
            
            <li>
              
              <p>Description: {room.description}</p>
            </li>
            
          </ul>
        </div>
       
      </div>
        
      </div>
    
     </div>
          <div id="right2">
          <div className="col-1">
              <div className="card card-body">
                <ul>
                  <li>
                    <div className="rowcart">
                      <div>Price : </div>
                      <div className="price">${room.price}</div>
                    </div>
                  </li>
                  <li>
                
                  <div className="rowcart">
                  
                    <div>
                      <div>Check In : </div>
                  <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />

                    </div>
                    
                    <div > 
                    <div>Check Out : </div>
                      <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
                    </div>
                    </div>
              
                  </li>
                  <li>
                    <div className="rowcart">
                      <div>Status</div>
                      <div>
                        {room.countInStock > 0 ? (
                          <span className="success">In Stock</span>
                        ) : (
                          <span className="error">Unavailable</span>
                        )}
                      </div>
                    </div>
                  </li>
                  <li>
                    <div><button className="primary block">Book Now</button></div>
                    <div><button className="primary block">Add to Cart</button></div>
                    
                  </li>
                  <li>
                    
                  </li>
                  <li>
                    
                  </li>
                </ul>
              </div>
            </div>
          </div>
          </>
    )}
    </div>
  );
}
