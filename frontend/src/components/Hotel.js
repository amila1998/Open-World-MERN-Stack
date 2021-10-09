import React from 'react';
import Rating from './Rating';

export default function hotel(props) {
    
  const { hotel } = props;
    return (
      
      <div key={hotel.id} className="card">
       
       <div className='image'><img className="medium" src={`/uploads/HotelsandRooms/${hotel.image}`} alt={hotel.name} /></div>
          
        
        <div className="card-body">
         
            <h2>{hotel.name}</h2>
   
          <Rating
            rating={hotel.rating}
            numReviews={hotel.numReviews}
          ></Rating>
          <div className="price">${hotel.price}</div>
        </div>
       
      </div>
     
     
    );
  }