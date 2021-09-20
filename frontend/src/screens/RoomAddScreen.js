import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createRoom } from '../actions/roomAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';


export default function RoomAddScreen(props) {
    const [roomname, setRoomName] = useState('');
    const [price, setprice] = useState('');
    const hotelId = props.match.params.hotelId;
    const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : `/roomlist/${hotelId}`;

    
    const roomCreate = useSelector((state) => state.roomCreate);
    const {
      loading,
      error
    } = roomCreate;    

    const dispatch = useDispatch();
  const submitHandler = (e) => {
    dispatch(createRoom(roomname,price,hotelId));
    //props.history.push(`/hotel/hotelDetails/${hotelId}/edit`);
    props.history.push(redirect);
  }
 
    return (
        <div>
        <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Add a Room</h1>
        </div>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <div>
          <label htmlFor="name">Room Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter Room name"
            required
            onChange={(e) => setRoomName(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="email">Price</label>
          <input
            type="number"
            id="price"
            placeholder="Enter Price"
            required
            onChange={(e) => setprice(e.target.value)}
          ></input>
        </div>
   
    
        <div>
          <label />
          <button className="primary" type="submit">
            Add
          </button>
        </div>
        
      </form>

            
        </div>
    )
}
