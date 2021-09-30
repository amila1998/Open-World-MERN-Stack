import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signout } from '../../actions/userAction';
import LoadingBox from '../LoadingBox';


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
        <header className="row">
          <div>
            <Link className="brand" to="/">
              Open World
            </Link>
          </div>
          
          <div>
          <div className="dropdown">
                <Link to="#Categories">
                Categories <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/hotels">Hotels</Link>
                  </li>
                  <li>
                    <Link to="/rooms">Rooms</Link>
                  </li>
                </ul>
              </div>
            <Link to="/feacures">feacures          
            </Link>
            <Link to="/aboutus">About Us           
            </Link>
            <Link to="/cart">Cart            
            </Link>
            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                </Link>
                <ul className="dropdown-content">
                    <li>
                        <Link to="/profile">User Profile</Link>
                    </li>
                    <li>
                        <Link to="/settings">Settings</Link>
                    </li>
                     <li>
                        <Link to="#signout" onClick={signoutHandler}>
                         Sign Out
                        </Link>
                     </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
            {userInfo && userInfo.isServiceProvider? (
              <div className="dropdown">
                <Link to="#serviceprovider">
                    Work Flow <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                {userInfo && userInfo.isServiceProvider && userInfo.haveHotels ? (
                        <li>
                        <Link to="/hotellist">My Hotels</Link>
                      </li>
                ):(
                    <li>
                     <Link to="/adminDashboard">Add a Hotel</Link>
                  </li>
                )}
                  
                </ul>
              </div>

            ):(
                <Link to="/settings">Become a Service Provider</Link>
              )}
            {userInfo && userInfo.isAdmin && (
              
              <Link to="/adminDashboard">Admin</Link>
                
            )}
          </div>
        </header>
       

        </div>

    )
}
