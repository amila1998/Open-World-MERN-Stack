import React from 'react';

import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';



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
import HotelServiceProviderRoute from './components/HotelServiceProviderRouter';
import ServiceProviderDashboardScreen from './screens/ServiceProviderDashboardScreen';
import HotelEditScreen from './screens/HotelEditScreen';
import RoomAddScreen from './screens/RoomAddScreen';
import RoomList from './screens/RoomLists';
import RoomEditScreen from './screens/RoomEditScreen';
import Navigation from './components/NavigationBar/Navigation';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from './actions/userAction';



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
      
      
      <Navigation/>
     
      <main>
      
      <Route path="/hotels" exact component={HotelsScreen}></Route>
      <Route path="/rooms" exact component={RoomsScreen}></Route>
      <Route path="/hotelDetails/:Htlid" exact component={HotelDetailsScreen}></Route>
      
      <Route path="/hotel/hotelDetails/:Htlid"  component={HotelDetailsScreen} exact></Route>
      <AdminRoute
            path="/hotel/hotelDetails/:Htlid/edit"
            component={HotelEditScreen}
            
          ></AdminRoute>
        
      <Route path="/:hotelId/roomDetails/:roomId" exact component={RoomDetailsScreen}></Route>
      <AdminRoute path="/addARoom/:hotelId"  component={RoomAddScreen}></AdminRoute>
      <AdminRoute path="/room/:hotelId/roomDetails/:roomId/edit" exact component={RoomEditScreen}></AdminRoute>
      <AdminRoute path="/roomlist/:hotelId"  component={RoomList}></AdminRoute>
      <Route path="/register" component={RegisterScreen}></Route>
      <Route path="/signin" component={SigninScreen}></Route>
      
      <Route path="/settings" component={Settings}></Route>

      <Switch>

      <AdminRoute path="/HotelManagement" exact component={AdminHotelManagement}></AdminRoute>
      <AdminRoute path="/HotelManagement/hotellist" exact component={HotelList}></AdminRoute>

      </Switch>

      <PrivateRoute
            path="/UpdateUserProfile"
            component={UpdateUserProfile}
          ></PrivateRoute>
          <PrivateRoute
            path="/profile"
            component={UserProfile}
          ></PrivateRoute>

        <HotelServiceProviderRoute
            path="/ServiceProviderDashboard"
            component={ServiceProviderDashboardScreen}
      ></HotelServiceProviderRoute>
      <HotelServiceProviderRoute
            path="/hotellist"
            component={HotelList}
      ></HotelServiceProviderRoute>
      
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
