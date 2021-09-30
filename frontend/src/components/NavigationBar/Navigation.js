import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signout } from '../../actions/userAction';

export default function Navigation() {
    const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
   
    dispatch(signout({
      
    }));
  };

    return (
        <div>
            <div>
           <a className="brand" href="/">
          <img src="/images/logo.png" alt="Open World"></img></a>
        </div>
            <div>
                <div className="dropdown">
                    <button className="dropbtn">categories  
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <a href="/hotels">Hotels</a>
                        <a href="/rooms">Rooms</a>
                        <a href="/">aaaaa</a>
                        <a href="/">Link 3</a>
                    </div>
                </div> 
            <a href="cart.html">feacures</a>
            <a href="cart.html">About us</a>
            <a href="cart.html">Cart</a>
                      {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  <button className="dropbtn">{userInfo.name} <i className="fa fa-caret-down"></i></button>{' '}
                </Link>
                <div className="dropdown-content">
                    <Link to="/profile">User Profile</Link>
                    <Link to="/settings">Settings</Link>
                    <Link to="#signout" onClick={signoutHandler}>Sign Out
                    </Link>
                 
                  </div>
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
             {userInfo && userInfo.isServiceProvider?(
                     <div className="dropdown">
                     <Link to="#">
                       <button className="dropbtn">Work Flow<i className="fa fa-caret-down"></i></button>{' '}
                     </Link>
                     <div className="dropdown-content">
                                      
                        {userInfo && userInfo.isServiceProvider && userInfo.haveHotels ? (
                                      <Link to="/hotellist">My Hotels</Link>
                                    ):(
                                      <Link to="/adminDashboard">Add a Hotel</Link>
                                    )}
                                              
                       </div>
                   </div>
                    ):(
                      <Link to="/settings">Become a Service Provider</Link>
                    )
                }
             
             {userInfo && userInfo.isAdmin && (
              <Link to="/adminDashboard">Admin</Link>
            )}

            

        </div>
            
        </div>
    )
}
