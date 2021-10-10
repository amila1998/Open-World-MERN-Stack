

import React, { useEffect,  useState } from 'react';
import Axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

import {  detailRoom, updateRoom } from '../actions/roomAction';
import { ROOM_UPDATE_RESET } from '../constants/roomConstants';


export default function HSPRoomEditScreen(props) {
  const hotelId = props.match.params.hotelId;
  const roomId = props.match.params.roomId;
  
  const [roomname, setRoomName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [avalability, setAvalability] = useState('');
 
  




  
  const roomdetail = useSelector((state) => state.roomdetail);
  const { loading, error, room } = roomdetail;

  const roomUpdate = useSelector((state) => state.roomUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = roomUpdate;


  const dispatch = useDispatch();

  

  useEffect(() => {

    if (successUpdate) {
      props.history.push(`/myroomlist/${hotelId }`);
    }
    if (!room || room._id !== roomId || successUpdate) {
      dispatch({ type: ROOM_UPDATE_RESET });
      dispatch(detailRoom(hotelId,roomId));
    } else {
      setRoomName(room.roomname);
      setPrice(room.price)
      setDescription(room.description);
      setCategory(room.category);
      setAvalability(room.avalability);
     
    }
  }, [room, dispatch, hotelId,roomId, successUpdate, props.history]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
        updateRoom({
          hotel:hotelId,
          _id: roomId,
          roomname,
          price,
          description,
          category,
          avalability,



        })
      );
  };

  const [loadingUpload, setLoadingUpload] = useState(false);
  const [errorUpload, setErrorUpload] = useState('');

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append('image', file);
    setLoadingUpload(true);
    try {
      const { data } = await Axios.post('http://localhost:8070/uploadR', bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      //setImage(data);
      setLoadingUpload(false);
    } catch (error) {
      setErrorUpload(error.message);
      setLoadingUpload(false);
    }
   
  };

 
  return (
    <div>
         {loadingUpdate && <LoadingBox></LoadingBox>}
        {errorUpdate && <MessageBox variant="danger">{errorUpdate}</MessageBox>}
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Edit Room {hotelId}</h1>
        </div>
     
            <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter hotel name"
                value={roomname}
                onChange={(e) => setRoomName(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="avalability">Avalability</label>
              <input
                id="avalability"
                type="checkbox"
                checked={avalability}
                onChange={(e) => setAvalability(e.target.checked)}
              ></input>
            </div>
            <div>
          <label htmlFor="name">Description</label>
          <textarea 
            type="text"
            id="description"
            placeholder="Enter Description"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea >
        </div>
        <div>
          <label htmlFor="category">Category</label>
          <select id="category"
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
              <label htmlFor="name">Room Price pre Day price</label>
              <input
                id="price"
                type="number"
                placeholder="Enter Price name"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></input>
            </div>
          
         
           
    
            <div>
              <label></label>
              <button className="primary" type="submit">
                Update
              </button>
            </div>
           
           

         
      </form>
 
 </>
          
          )}
    </div>
  );
}
