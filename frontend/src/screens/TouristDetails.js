import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsUser } from '../actions/userAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function TouristDetails(props) {
 const UID = props.match.params.userId;
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;
  const dispatch = useDispatch();
 

  useEffect(() => {
    

 dispatch(detailsUser((UID)));
      
  }, [dispatch, UID]);

 
  return (
    <div>
      <form className="form" >
        <div>
          <h1>User Profile</h1>
        </div>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            <div>
              <label htmlFor="name">Name : </label>
              <label htmlFor="nameholder" > {user.name} </label>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <label htmlFor="emailholder"> {user.email}</label>
            </div>
            
          </>
        )}
      </form>
    </div>
  );
}