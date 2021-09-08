import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsUser } from '../actions/userAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function ProfileScreen(props) {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;
  const dispatch = useDispatch();
  if (!userInfo._id) {
    props.history.push('/signin');
  }

  useEffect(() => {
    
        dispatch(detailsUser((userInfo._id)));
      
  }, [dispatch, userInfo._id]);

 
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