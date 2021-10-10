//import react from 'react';
//import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { detailHotel } from '../actions/hotelActions';
import Rooms from '../components/Rooms';
//import data from '../data';
import '../styles/hotelsandRooms.css'


export default function HotelDetailsScreen(props){

  const hotelId = props.match.params.Htlid;
  const hoteldetail = useSelector((state) => state.hoteldetail);
  const { loading, error, hotel } = hoteldetail;
 

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailHotel(hotelId));
    
  }, [dispatch, hotelId]);
  return (
    <div className="pageBody">
    {loading ? (
      <LoadingBox></LoadingBox>
    ) : error ? (
      <MessageBox variant="danger">{error}</MessageBox>
    ) : (
    <div>
      <Link to="/hotels">Back to result</Link>
      <div className="row top">
        <div className="">
          <img style={{maxHeight:'500px', position:"center" , margin:'auto', }} className="large" src={`/uploads/HotelsandRooms/${hotel.image}`} alt={hotel.hotelname}></img>
        </div>
        <div className="">
          <ul>
            <li>
              <h1 style={{fontSize:'50px', position:"center" , margin:'auto', }}>{hotel.hotelname}</h1>
            </li>
            <li>
              <Rating
                rating={hotel.rating}
                numReviews={hotel.numReviews}
              ></Rating>
            </li>
            <li style={{fontSize:'20px', position:"center" , margin:'auto', }}>Category : {hotel.category}</li>
            <li style={{fontSize:'20px', position:"center" , margin:'auto', }}>
              Description :
              <p style={{fontSize:'15px', position:"center" , margin:'auto', }}>{hotel.description}</p>
            </li>
            <li style={{fontSize:'20px', position:"center" , margin:'auto', }}>
              Location :
              <p style={{fontSize:'15px', position:"center" , margin:'auto', }}>{hotel.addressline1}<br/>{hotel.addressline2}<br/>{hotel.city}<br/>{hotel.province}<br/>{hotel.country}</p>
            </li>
          </ul>
        </div>
       
      </div>
      <div>  <div className="col">
        <hr style={{ border: '10px solid green',  radius: '5px' }} />
            <h1 style={{fontSize:'50px', position:"center" , margin:'auto', }}>ROOMS</h1>
      
            <div className="row center">
            {
              hotel.rooms.length?(
            hotel.rooms.map((room) => (
          <a href={`/${hotel._id}/roomDetails/${room._id}`}>
          <Rooms key={room._id} room={room}></Rooms></a> ))):(
            <MessageBox>No Rooms</MessageBox>
          )}
          </div>
        
        
      </div></div>
      </div>
      
      )}
      
    </div>
  );
}
