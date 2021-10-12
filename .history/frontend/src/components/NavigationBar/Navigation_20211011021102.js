import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { guidesignout } from '../../actions/guideAction';
import { signout } from '../../actions/userAction';
//import LoadingBox from '../LoadingBox';


export default function Navigation() {
    const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  //const { guideInfo} = guide
  //const { guideInfo } = userSignin;
  const guideSignin = useSelector((state) => state.guideSignin);
  const { guideInfo }=guideSignin;
 

  const dispatch = useDispatch();
  const signoutHandler = () => {
   
    dispatch(signout({
      
    }));
  };
  const guidesignoutHandler = (props) => {
   
    dispatch(guidesignout({
      
    }));
    
  };

    return (

  <div >
  <nav className="navbar navbar-expand-lg   fixed-top navbar-light bg-primary">
 
  <div className="container-fluid">
  <div className="navbar-brand">
            <Link className="brand" to="/">
              Open World
            </Link>
          </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
    <div className="flex-row-reverse">
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
                  <li>
                    <Link to="/guides">Guides</Link>
                  </li>
                  <li>
                    <Link to="/AdventureList">Adventure</Link>
                  </li>
                  <li>
                    <Link to="/VehicleHomeScreen">Rent Vehicles</Link>
                  </li>
                  
                </ul>
              </div>
            <Link to="/feature">Feature        
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
                        <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                        <Link to="/myBookings">My Bookings</Link>
                    </li>
                    <li>
                        <Link to="/settings">Settings</Link>
                    </li>
                     <li>
                        <Link to="#signout" onClick={signoutHandler}>
                         Logout
                        </Link>
                     </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">SignIn</Link>
            )}

          
            {userInfo && (
              <div className="dropdown">
                <Link to="#serviceprovider">
                    Work Flow<i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  {userInfo.isGuide?(
                     <li>
                     <Link  to="/guideProfile">My Guide Profile</Link>
                   </li>
                  ):(
                    <li>
                    <Link  to="/guideRegister">Guide Registration</Link>
                  </li>
                  )}
                 {userInfo.ishotelServiceProvider?(
                     <li>

                     <Link  to="/hspProfile">I am a Hotel Provider</Link>
                   </li>
                  ):(
                    <li>
                       <Link  to="/hspRegister">Hotel Service Provider Registration</Link>
                   

                  </li>
                  )}
                  
                </ul>
              </div>

            )}
             
              
            
                
         

            {userInfo && userInfo.isAdmin && (
              
              <Link to="/adminDashboard">Admin</Link>
                
            )}
          </div>
          <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    </div>
    
  </div>
 
</nav>
          
        
        </div>

    )
}
