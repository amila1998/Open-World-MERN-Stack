import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { registerhsp } from '../actions/hotelSPAction';
import { signout } from '../actions/userAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function HSPRegistrationScreen(props) {

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [logo, setlogo] = useState('');
    const [description, setdescription] = useState('');
    
  
    const redirect = props.location.search
      ? props.location.search.split('=')[1]
      : '/signin';
  
    const hspRegister = useSelector((state) => state.hspRegister);
    const { hsp, loading, error } = hspRegister;
  
    const dispatch = useDispatch();
    const submitHandler = (e) => {
      e.preventDefault();
      
        dispatch(registerhsp(firstname, lastname, logo,description,userInfo._id));
       
        signout();
      
      
    };
    useEffect(() => {
      if (!userInfo) {
        props.history.push(redirect);
      }
    }, [props.history, redirect, userInfo]);


    return (
        <div className="pageBody">
            <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Create Tourist Account</h1>
        </div>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <div>
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            id="firstname"
            placeholder="Enter First Name"
            required
            onChange={(e) => setfirstname(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            placeholder="Enter Last Name"
            required
            onChange={(e) => setlastname(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="logo">Logo Image</label>
          <input
            type="file"
            id="logo"
            placeholder="Select a logo"
            
            onChange={(e) => setlogo(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            type="text"
            id="description"
            placeholder="Enter description"
            required
            onChange={(e) => setdescription(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Register As Hotel Service Provider
          </button>
        </div>
        <div>
          <label />
          
        </div>
        <div>
          <label />
        </div>
      </form>
            
        </div>
    )
}
