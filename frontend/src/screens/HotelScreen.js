import React, { useEffect } from 'react';
//import axios from 'axios';
import Hotel from '../components/Hotel';
//import data from '../data';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listHotels } from '../actions/hotelActions';


export default function HotelsScreen(props){
  //const serviceproviderMode = props.match.path.indexof['/serviceprovider']>=0;
  const dispatch = useDispatch();
  const hotelList = useSelector((state) => state.hotelList);
  const { loading, error, hotels } = hotelList;
  
  useEffect(() => {
    dispatch(listHotels({}));
   
  }, [dispatch]);
    return(
        <div className="pageBody">
          {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        
        <div className="row center">
          {hotels.map((hotel) => (
            <a href={`/hotel/hotelDetails/${hotel._id}`}>
            <Hotel key={hotel._id} hotel={hotel}></Hotel></a> ))}
            </div>
            
          )}
        </div>
      );
    }