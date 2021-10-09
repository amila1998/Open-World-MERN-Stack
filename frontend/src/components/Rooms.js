import React from 'react';
import Rating from './Rating';
import { Link } from 'react-router-dom';


export default function room(props) {
  
    
  const { room } = props;
    return (
   
      <div class="card mb-3" style={{width:'75%', }}>
      <div class="row g-0">
        <div class="col-md-4">
          <img src={`/uploads/HotelsandRooms/${room.image1}`} style={{width:'30rem', height:'20rem'}} class="img-fluid rounded-start" alt={room.roomname}/>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{room.roomname}</h5>
            <div className="price">${room.price}</div>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            <Rating
            rating={room.rating}
            numReviews={room.numReviews}
          ></Rating>
           <div>
            <Link to={`/hotelDetails/${room.hotel}`}>
           See Hotel Details
              </Link>
    </div>
          </div>
        </div>
      </div>
    </div>   

  
         
      
        
       
       
    
     
    );
  }