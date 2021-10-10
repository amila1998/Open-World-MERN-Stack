import React from 'react';
import Rating from './Rating';
import { Link } from 'react-router-dom';

export default function hotelDetail(props) {
    
  const { hotel } = props;
    return (
        <div>
        <Link to="/hotels">Back to result</Link>
        <div className="row top">
          <div className="col-2">
            <img
              className="large"
              src={`/uploads/HotelsandRooms/${hotel.image}`}
              alt={hotel.hotelname}
            ></img>
          </div>
          <div className="col-1">
            <ul>
            <li>
                <h1>{hotel?._id}</h1>
              </li>
              <li>
                <h1>{hotel?.hotelname}</h1>
              </li>
              <li>
                <Rating
                  rating={hotel?.rating}
                  numReviews={hotel?.numReviews}
                ></Rating>
              </li>
              <li>Pirce : ${hotel?.price}</li>
              <li>
                Description:
                <p>{hotel?.description}</p>
              </li>
            </ul>
          </div>
          <div className="col-1">
            <div className="card card-body">
              <ul>
                <li>
                  <div className="row">
                    <div>Price</div>
                    <div className="price">${hotel?.price}</div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div>Status</div>
                    <div>
                      {hotel?.countInStock > 0 ? (
                        <span className="success">In Stock</span>
                      ) : (
                        <span className="danger">Unavailable</span>
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
    );
 }