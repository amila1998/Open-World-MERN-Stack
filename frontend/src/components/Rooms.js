import React from 'react';
import Rating from './Rating';
import { Link } from 'react-router-dom';


export default function room(props) {
  
    
  const { room } = props;
    return (
      
      <div key={room._id} className="card">
       
       <div className='image'><img className="medium" src="" alt={room.roomname} /></div>
          
        
        <div className="card-body">
         
            <h2>{room.roomname}</h2>
   
          <Rating
            rating={room.rating}
            numReviews={room.numReviews}
          ></Rating>
          <div className="price">${room.price}</div>
        </div>
        <div>
            <Link to={`/hotelDetails/${room.hotel}`}>
           
              </Link>
          </div>
       
       
      </div>
     
     
    );
  }