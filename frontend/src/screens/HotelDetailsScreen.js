//import react from 'react';
//import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { detailHotel } from '../actions/hotelActions';
//import data from '../data';


export default function HotelDetailsScreen(props){
  const dispatch = useDispatch();
  const hotelId = props.match.params.Htlid;
  const hoteldetail = useSelector((state) => state.hoteldetail);
  const { loading, error, hotel } = hoteldetail;

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
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <div className="row">
                  <div>Price</div>
                  <div className="price">${hotel.price}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Status</div>
                  <div>
                    {hotel.countInStock > 0 ? (
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
      )}
    </div>
  );
}
