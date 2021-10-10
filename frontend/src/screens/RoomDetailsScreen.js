//import react from 'react';
//import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
//import Rating from '../components/Rating';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import {  detailRoomWithDays } from '../actions/roomAction';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange  } from 'react-date-range';
import { addDays } from 'date-fns';
//import axios from '../../node_modules/axios/index';
import { createHotelbooking} from '../actions/hotelBookAroomAction';


//import data from '../data';


export default function RoomDetailsScreen(props){
 
  const hotelId = props.match.params.hotelId;
  const roomId = props.match.params.roomId;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const roomdetailwithdays = useSelector((state) => state.roomdetailwithdays);
  const { loading, error, roomwithdays } = roomdetailwithdays;
 // console.log(room)

  const HotelbookingCreate =useSelector((state) => state.HotelbookingCreate);
  const { loading:bookingLoading, error:bookingErr, hotelbook , success:successCreate} = HotelbookingCreate;
  
  //const hotelBookingDays =useSelector((state) => state.hotelBookingDays);
 // const { loading:bookingdayLoading, error:bookingdayErr, hotelbookdays} = hotelBookingDays;

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [message , setMassege] = useState('');
  const [price , setPrice] = useState('');
  const [bookingDayCount , setcount] = useState('');
  const [bookedDateArr, setbookedDateArr] = useState([]);
  //const [BstartDate, setBStartDate] = useState([]);
 // const [BendDate, setBEndDate] = useState([]);
  const oneDay = 24 * 60 * 60 * 1000;
      useEffect(()=> {
      formateBookedDates()
      bookingTotal()

      },[roomwithdays,startDate,endDate])
  const formateBookedDates = ()=> {
    let dateList = [];
    for (let i=0; i<roomwithdays?.datelist?.length; i++){
      for (let j=0; j<roomwithdays?.datelist[i]?.length; j++){
        dateList = [...dateList, new Date(roomwithdays?.datelist?.[i]?.[j])]
      }
    }
    setbookedDateArr(dateList)
    //console.log(bookedDateArr)
  }
  const bookingTotal = ()=> {
    const diffDays = Math.round(Math.abs(((startDate - endDate) / oneDay))+1);
    setcount(diffDays)
    }
   
    //console.log(bookedDateArr)
  
  
  

  
  const SeletionRange = {
    startDate:startDate,
    endDate:endDate,
    key:"selection",
  };

  function handleSelect(range){
    setStartDate(range.selection.startDate);
    setEndDate(range.selection.endDate);
  }

  

  const dispatch = useDispatch();



  const bookNowHandler = (e) => {
    
    e.preventDefault();
    if (!userInfo?._id) {
      props.history.push('/signin');
    }else{
      if ((!startDate || !endDate)){
        alert("Please Select Booking Date Range In Calender");
      }else{
        if(roomwithdays.room.avalability){
          dispatch(createHotelbooking(
            hotelId,
            roomId,
            startDate,
            endDate,
            roomwithdays.room.price*bookingDayCount,
            message,
            userInfo._id,
            ));
            if(successCreate){
              alert("Booking Success");
              props.history.push(`/payment/${hotelbook._id}`);
            }else{
              alert("Booking not Success");
            }
        }else{
          alert("This room is Unavailable");
        }
        
         
       
       
      }

    }
    
    
  };


  
  

  useEffect(() => {
  
   
      dispatch(detailRoomWithDays(hotelId,roomId));
 
      
      
     
    
    
  }, [dispatch, hotelId, roomId,successCreate]);

  

  
    
  
    
  return (
    <>
    <div className="pageBody">
      <Link to="/rooms">Back to result</Link>
      
        {loading ? (
      <LoadingBox></LoadingBox>
    ) : error ? (
      <MessageBox variant="danger">{error}</MessageBox>
    ) : (
     <>
     
          
      <img className="large" style={{width:'100%', height:'50rem'}} src={`/uploads/HotelsandRooms/${roomwithdays.room.image1}`} alt={roomwithdays.room.roomname}></img>
      
      <div id="split2">
      <div id="left2">
      <div className="">
        
          <div className="row top">
       
        <div className="">
          <ul>
            <li>
              
              <h1 style={{ fontSize:'20px', position:"center" , margin:'auto', }}>Room Name:  {roomwithdays.room.roomname}</h1>
            </li>
            <li>
              
              <h1 style={{ fontSize:'20px', position:"center" , margin:'auto', }}> {roomwithdays.room.avalability?(
                  <h1 style={{ color:'green' }}>Avalability: Avalable</h1>
              ):(
                <h1 style={{ color:'red' }}>Avalability: Unavalable</h1>
              )}</h1>
            </li>
            <li>
                    <div className="rowcart">
                      <div >Price for a Day : ${roomwithdays.room.price}</div>
                     
                    </div>
                  </li>
          
            
            <li>
            <div className="rowcart">
              ,<div><p>Description: {roomwithdays.room.description}</p></div>
              </div>
            </li>

          
            
          </ul>
        </div>
       
      </div>
        
      </div>
    
     </div>
          <div id="right2">
          <div className="">
         
              <div className="card card-body">
                <ul>
                 
                  <li>
                
                  <div className="rowcart">
                  <div>Booking Date: </div>
              
                    <DateRange className="row" style={{
                            width:'100%', position:'relative'
                            }}
                      ranges={[SeletionRange]}
                      onChange={handleSelect}
                 
                      format="dd-MM-yyyy"
                      direction="vertical"
                      scroll={{ enabled: true }}
                      minDate={addDays(new Date(), 0)}
                      
                      disabledDates={bookedDateArr}
                     
                    />
              
                    </div>
              
                  </li>
                  <li>
                    <div className="rowcart">
                      <div >Price : ${roomwithdays.room.price*bookingDayCount}</div>
                     
                    </div>
                  </li>
                  <li>
                    <div className="rowcart">
                      <div>Message : </div>
                      <div>
                      <textarea 
                          type="text"
                          id="message"
                          placeholder="Enter message"
                          required
                          onChange={(e) => setMassege(e.target.value)}
                       ></textarea >
                      </div>
                    </div>
                  </li>
                  <li>
                     <>
                    {bookingLoading ? (
                  <LoadingBox></LoadingBox>
                ) : bookingErr &&(
                  <MessageBox variant="danger">{bookingErr}</MessageBox>
                )}
                </>
                    
                  </li>
                  <li>
                    <div><button className="primary block" onClick={bookNowHandler}>Book Now</button></div>
                    <div><button className="primary block">Add to Cart</button></div>

                    
                  </li>
                  <li>
                
                    
                    
                  </li>
                  <li>
                    
                  </li>
                </ul>
              </div>
            
            </div>
          </div>
          </div>
          </>
         
    )}
   

    </div>
    </>
  );
}
