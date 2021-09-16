//import react from 'react';
//import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { detailRoom } from '../actions/roomAction';
import { detailHotel } from '../actions/hotelActions';
//import data from '../data';


export default function RoomDetailsScreen(props){
 
  const hotelId = props.match.params.hotelId;
  const roomId = props.match.params.roomId;

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
      <div>{hotel.rooms.map((room) => (
        room._id === roomId &&(
          <hi key={roomId} room={room}>{room.roomname} </hi>
        )
       
      ))}</div>
    )}
    </div>
  );
}
