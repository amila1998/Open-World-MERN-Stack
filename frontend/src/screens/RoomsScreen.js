import React, { useEffect } from 'react';
//import axios from 'axios';
import Rooms from '../components/Rooms';
//import data from '../data';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listRooms } from '../actions/roomAction';

export default function RoomsScreen(){
  const dispatch = useDispatch();
  const roomList = useSelector((state) => state.roomList);
  const { loading, error, rooms } = roomList;

  useEffect(() => {
    dispatch(listRooms());
  }, [dispatch]);
    return(
        <div>
          {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row center">
          {rooms.map((room) => (
            <a href={`/roomDetails/${room._id}`}>
            <Rooms key={room._id} room={room}></Rooms></a> ))}
            </div>
          )}
        </div>
      );
    }