import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createRoom } from '../actions/roomAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';


export default function HSPRoomAddScreen(props) {
    const [roomname, setRoomName] = useState('');
    const [description,setDescription]= useState('');
    const [price, setprice] = useState('');
    const [image1, setimage1] = useState('');
    const[category, setCategory]=useState('');
    const hotelId = props.match.params.hotelId;
    const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : `/roomlist/${hotelId}/hsp}`;

    
    const roomCreate = useSelector((state) => state.roomCreate);
    const {
      loading,
      error
    } = roomCreate;   
    
    const onChangeFile= e=>{
      setimage1(e.target.files[0]);
  }

    const dispatch = useDispatch();
  const submitHandler = (e) => {
    dispatch(createRoom(
      roomname,
      price,
      hotelId,
      description,
      image1,
      category));
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
          <label htmlFor="name">Description</label>
          <textarea 
            type="text"
            id="description"
            placeholder="Enter Description"
            required
            onChange={(e) => setDescription(e.target.value)}
          ></textarea >
        </div>
        <div>
          <label htmlFor="category">Category</label>
          <select
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      >
        <option value='Single'>Single: A room assigned to one person.</option>
        <option value='Double'>Double: A room assigned to two people.</option>
        <option value='Triple'>Triple: A room assigned to three people.</option>
        <option value='Quad'>Quad: A room assigned to four people.</option>
        <option value='Queen'>Queen: A room with a queen-sized bed.</option>
        <option value='Queen'>King: A room with a king-sized bed. </option>
        <option value='Twin'>Twin: A room with two beds.</option>
        <option value='Double-double'>Double-double: A room with two double (or perhaps queen) beds.</option>
        <option value='Studio'>Studio: A room with a studio bed – a couch that can be converted into a bed. May also have an additional bed</option>
      </select>
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
          <label htmlFor="email">cover Image</label>
          <input
            type="file"
            id="image1"
            placeholder="Upload Your Image"
            required
            onChange={onChangeFile}
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
