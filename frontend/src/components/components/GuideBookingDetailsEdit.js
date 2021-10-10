import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsUser } from '../actions/userAction';

const GuideBookingDetailsEdit = (props) => {
  const [details, setDetails] = useState();

  const [status, setStatus] = useState('');

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;
  const dispatch = useDispatch();
  useEffect(() => {
    
    getDetails();
   
    

  }, []);

  const getDetails = async () => {
    try {
      const res = await axios.get(`http://localhost:8070/guideBookingR/getD/${props?.match?.params?.id}`);

      setDetails(res?.data);
     
   
    } catch (err) {}
  };

  const submit = async () => {
    try {
      await axios.put(`http://localhost:8070/guideBookingR/${props?.match?.params?.id}`, { status });
      alert('successfully Edit');
    } catch (err) {
      alert('Something went wrong');
    }
  
  };
  const viewTouristProfile = () => {
    props.history.push(`/guide/viewTouristProfile/${details.user}`);
  };

 

  return (
    <div>
      <h1>Booking Details</h1>
      <h2>Start Date: {details?.startdate}</h2>
      <h2>End Date: {details?.enddate}</h2>
      <h2>Message: {details?.message}</h2>
      <button onClick={viewTouristProfile} value="View Tourist Profile">View Tourist Profile</button>
      <h2>Status: {details?.status}</h2>
      <select
        onChange={(e) => {
          setStatus(e.target.value);
        }}
      >
        <option value='pending'>Pending</option>
        <option value='canceled'>Canceled</option>
        <option value='approved'>Approved</option>
      </select>
      <button onClick={submit}>Submit</button>
    </div>
  );
};

export default GuideBookingDetailsEdit;
