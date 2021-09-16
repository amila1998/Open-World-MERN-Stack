import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter,Link, Route, Switch } from 'react-router-dom';
import { signout } from './actions/userAction';


import HotelDetailsScreen from './screens/HotelDetailsScreen';
import SigninScreen from './screens/SigninScreen';
import RegisterScreen from './screens/UserRegister';
import UserProfile from './screens/ProfileScreen';
import Settings from './screens/SettingsScreen';
import RoomsScreen from './screens/RoomsScreen';
import UpdateUserProfile from './screens/UpdateUserProfileScreen';
import PrivateRoute from './components/PrivateRoute';
import HomeScreen from './screens/HomeScreen';
import HotelsScreen from './screens/HotelScreen';
import RoomDetailsScreen from './screens/RoomDetailsScreen';
import AdminRoute from './components/AdminRouter';
import AdminDashboardScreen from './screens/AdminDashboardScreen';

import AdminHotelManagement from './screens/AdminHotelManagement';
import HotelList from './screens/HotelList';
import ServiceProviderRoute from './components/ServiceProviderRouter';
import ServiceProviderDashboardScreen from './screens/ServiceProviderDashboardScreen';
import HotelEditScreen from './screens/HotelEditScreen';



function App() {

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
   
    dispatch(signout({
      
    }));
  };


  return (
    <BrowserRouter>
<div className="grid-container">
      <header className="row">
     
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
      </header>
      <main>
      
      <Route path="/hotels" exact component={HotelsScreen}></Route>
      <Route path="/rooms" exact component={RoomsScreen}></Route>
      <Route path="/hotelDetails/:Htlid" exact component={HotelDetailsScreen}></Route>
      
      <Route path="/hotel/hotelDetails/:Htlid"  component={HotelDetailsScreen} exact></Route>
      <Route
            path="/hotel/hotelDetails/:Htlid/edit"
            component={HotelEditScreen}
            exact
          ></Route>
      <Route path="/:hotelId/roomDetails/:roomId" exact component={RoomDetailsScreen}></Route>
      <Route path="/register" component={RegisterScreen}></Route>
      <Route path="/signin" component={SigninScreen}></Route>
      
      <Route path="/settings" component={Settings}></Route>
      <Switch>
      <AdminRoute path="/HotelManagement" exact component={AdminHotelManagement}></AdminRoute>
      <AdminRoute path="/HotelManagement/adminhotellist" component={HotelList}></AdminRoute>
      </Switch>
      <PrivateRoute
            path="/UpdateUserProfile"
            component={UpdateUserProfile}
          ></PrivateRoute>
          <PrivateRoute
            path="/profile"
            component={UserProfile}
          ></PrivateRoute>
        <ServiceProviderRoute
            path="/ServiceProviderDashboard"
            component={ServiceProviderDashboardScreen}
      ></ServiceProviderRoute>
      <ServiceProviderRoute
            path="/ServiceProviderhotellist"
            component={HotelList}
      ></ServiceProviderRoute>
      <AdminRoute
            path="/adminDashboard"
            component={AdminDashboardScreen}
      ></AdminRoute>
        
      <Route path="/" exact component={HomeScreen}></Route>
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
    </BrowserRouter>
  );
  
}

export default App;
