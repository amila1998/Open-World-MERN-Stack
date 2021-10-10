

import React, { useEffect,  useState } from 'react';
import Axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

import {  detailRoom, updateRoom } from '../actions/roomAction';
import { ROOM_UPDATE_RESET } from '../constants/roomConstants';


export default function RoomEditScreen(props) {
  const hotelId = props.match.params.hotelId;
  const roomId = props.match.params.roomId;
  
  const [roomname, setRoomName] = useState('');
  const [price, setPrice] = useState('');
 
  




  
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
      props.history.push(`/roomlist/${hotelId }`);
    }
    if (!room || room._id !== roomId || successUpdate) {
      dispatch({ type: ROOM_UPDATE_RESET });
      dispatch(detailRoom(hotelId,roomId));
    } else {
      setRoomName(room.roomname);
      setPrice(room.price)
     
    }
  }, [room, dispatch, hotelId,roomId, successUpdate, props.history]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
        updateRoom({
          hotel:hotelId,
          _id: roomId,
          roomname,
          price




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
          <h1>Edit Hotel {hotelId}</h1>
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
              <label htmlFor="name">price</label>
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
