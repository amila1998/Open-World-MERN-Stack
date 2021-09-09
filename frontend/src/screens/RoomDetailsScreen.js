//import react from 'react';
//import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { detailRoom } from '../actions/roomAction';
//import data from '../data';


export default function RoomDetailsScreen(props){
  const dispatch = useDispatch();
  const roomId = props.match.params.roomId;
  const roomdetail = useSelector((state) => state.roomdetail);
  const { loading, error, room } = roomdetail;

  useEffect(() => {
    dispatch(detailRoom(roomId));
  }, [dispatch, roomId]);
    
  return (
    <div>
    {loading ? (
      <LoadingBox></LoadingBox>
    ) : error ? (
      <MessageBox variant="danger">{error}</MessageBox>
    ) : (
    <div id="split2">
      <div id="left2">
      <Link to="/rooms">Back to result</Link>
      <div className="row top">
        <div className="col-2">
          <img className="large" src={room.image} alt={room.roomname}></img>
        </div>
        <div className="col-1">
          <ul>
            <li>
              <h1>{room.roomname}</h1>
            </li>
            <li>
              <Rating
                rating={room.rating}
                numReviews={room.numReviews}
              ></Rating>
            </li>
            <li>Pirce : ${room.price}</li>
            <li>
              Description:
              <p>{room.description}</p>
            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <div className="row">
                  <div>Price</div>
                  <div className="price">${room.price}</div>
                </div>
              </li>
              <li>
                <div className="row">
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
                <button className="primary block">Add to Cart</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </div>
      <div id="right2">
                        <h1>Righit</h1>
      </div>
      </div>
     
      )}
    </div>
  );
}
