//import react from 'react';
//import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { detailHotel } from '../actions/hotelActions';
import { listRooms } from '../actions/roomAction';
import Rooms from '../components/Rooms';
//import data from '../data';


export default function HotelDetailsScreen(props){

  const hotelId = props.match.params.Htlid;
  const hoteldetail = useSelector((state) => state.hoteldetail);
  const { loading, error, hotel } = hoteldetail;
 

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailHotel(hotelId));
    
  }, [dispatch, hotelId]);
  return (
    <div>
    {loading ? (
      <LoadingBox></LoadingBox>
    ) : error ? (
      <MessageBox variant="danger">{error}</MessageBox>
    ) : (
    <div>
      <Link to="/hotels">Back to result</Link>
      <div className="row top">
        <div className="col-2">
          <img className="large" src={hotel.image} alt={hotel.hotelname}></img>
        </div>
        <div className="col-1">
          <ul>
            <li>
              <h1>{hotel.hotelname}</h1>
            </li>
            <li>
              <Rating
                rating={hotel.rating}
                numReviews={hotel.numReviews}
              ></Rating>
            </li>
            <li>Pirce : ${hotel.price}</li>
            <li>
              Description:
              <p>{hotel.description}</p>
            </li>
          </ul>
        </div>
       
      </div>
      <div>  <div className="col-3">
      
            <div className="row center">
            {
              hotel.rooms.length?(
            hotel.rooms.map((room) => (
          <a href={`/${hotel._id}/roomDetails/${room._id}`}>
          <Rooms key={room._id} room={room}></Rooms></a> ))):(
            <MessageBox>No Rooms</MessageBox>
          )}
          </div>
        
        )
      </div></div>
      </div>
      
      )}
      
    </div>
  );
}
