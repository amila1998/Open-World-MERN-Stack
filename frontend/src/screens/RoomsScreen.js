import React, { useEffect } from 'react';
//import axios from 'axios';
import Rooms from '../components/Rooms';
//import data from '../data';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
//import { listRooms } from '../actions/roomAction';
import { listHotels } from '../actions/hotelActions';


export default function RoomsScreen(){
  const dispatch = useDispatch();
  const hotelList = useSelector((state) => state.hotelList);
  const { loading, error, hotels } = hotelList;
  
  useEffect(() => {
    dispatch(listHotels({}));
   
  }, [dispatch]);
    return(
        <div>
          {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row center">
          {hotels.rooms === 0 && (
              <MessageBox>There is no hotels</MessageBox>
            )}
        {hotels.map((hotel) => (
            hotel.rooms.map((room) => (
          <a href={`${hotel._id}/roomDetails/${room._id}`}>
          <Rooms key={room._id} room={room}></Rooms></a> ))))}
          </div>
        )}
      </div>
      );
    }