import React from 'react';
import Rating from './Rating';

export default function room(props) {
    
  const { room } = props;
    return (
      
      <div key={room.id} className="card">
       
       <div className='image'><img className="medium" src={room.image} alt={room.name} /></div>
          
        
        <div className="card-body">
         
            <h2>{room.roomname}</h2>
   
          <Rating
            rating={room.rating}
            numReviews={room.numReviews}
          ></Rating>
          <div className="price">${room.price}</div>
        </div>
       
      </div>
     
     
    );
  }