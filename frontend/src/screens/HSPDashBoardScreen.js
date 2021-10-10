import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { detailshsp, updatehspProfile } from '../actions/hotelSPAction';
import Sidebar from '../components/HotelServiceProviderSidebar';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { HSP_UPDATE_PROFILE_RESET } from '../constants/hotelSpConstants';

export default function HSPDashBoardScreen(props) {
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [logo, setlogo] = useState('');
    const [description, setdescription] = useState('');
    
  
    const redirect = props.location.search
      ? props.location.search.split('=')[1]
      : '/signin';
  
   

    const hspDetails = useSelector((state) => state.hspDetails);
    const { loading, error, hsp } = hspDetails;

    const hspUpdateProfile = useSelector((state) => state.hspUpdateProfile);
    const {
        success: successUpdate,
        error: errorUpdate,
        loading: loadingUpdate,
    } = hspUpdateProfile;
  
    const dispatch = useDispatch();
    const updatehspHandler = (e) => {
      e.preventDefault();
      
       // dispatch(registerhsp(firstname, lastname, logo,description,userInfo._id));
       dispatch(
        updatehspProfile({
            userId: userInfo._id,
          firstname,
          lastname,
          logo,
          description,
        
        }))
       
      
      
    };
    useEffect(() => {
        if (!hsp) {
            dispatch({ type: HSP_UPDATE_PROFILE_RESET });
            dispatch(detailshsp(userInfo._id));
          } else {
            if (hsp.hotelserviceProvider) {
                setfirstname(hsp.hotelserviceProvider.firstname);
                setlastname(hsp.hotelserviceProvider.lastname);
                setlogo(hsp.hotelserviceProvider.logo);
                setdescription(hsp.hotelserviceProvider.description);
            }
          }
          
     
      
    }, [dispatch, hsp, props.history, redirect, userInfo]);
    

    return (
        <div >
            <div id="split1">
            <div id="left1">
     
           <Sidebar/>
        
            </div>
        
            <div className="right1 pageBody">
            <div className="row">
               
              
            <h1> Hotel Service Provider Profile</h1>

            <div>
            <form className="form" onSubmit={updatehspHandler}>
        
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        {loadingUpdate && <LoadingBox></LoadingBox>}
            {errorUpdate && (
              <MessageBox variant="danger">{errorUpdate}</MessageBox>
            )}
            {successUpdate && (
              <MessageBox variant="success">
                Profile Updated Successfully
              </MessageBox>
            )}
        <div>
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            id="firstname"
            placeholder="Enter First Name"
            value={firstname}
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
            value={lastname}
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
            value={description}
            placeholder="Enter description"
            required
            onChange={(e) => setdescription(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Update
          </button>
          <br/>
        </div>
        <div>
          <label />
          
        </div>
        <div>
          <label />
        </div>
      </form>
            
        </div>
            
            
            </div>
            
            </div>
    </div>
      
        </div>
    )
}
