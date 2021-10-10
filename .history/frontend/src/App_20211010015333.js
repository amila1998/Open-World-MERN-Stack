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
import ServiceProviderCategoryScreen from './screens/ServiceProviderCategoryScreen';
import GuideRegister from './components/GuidRegister';
import ServiceProviderLoginCategoryScreen from './screens/ServiceProviderLoginCategoryScreen';
import GuideSigninScreen from './screens/GuideSigninScreen';
import GuideRoute from './components/GuideRouter';
import MyGuideprofileConformation from './components/MyGuideprofileConformation';
import MyGuideProfile from './components/MyGuideProfile';
import EditGuide from './components/EditGuideDetails';
import GuideDisplayList from './components/GuideDisplayList';
import OneGuide from './components/OneGuide';
import GuideBookingDetailsEdit from './components/GuideBookingDetailsEdit';
import ProfileScreen from './screens/ProfileScreen';
import TouristDetails from './screens/TouristDetails';

import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import HSPRegistrationScreen from './screens/HSPRegistrationScreen';


import Map_admin from "./components/Map_admin";
import Map_cus from "./components/Map_cus";
import CreateDestination from './components/CreateDestination';
import FFMM1 from './components/FFMM1';
import DestinationDetails from './components/DestinationDetails';
import EditDestination from './components/EditDestination';
import DestinationHomeScreen from './components/DestinationHomeScreen';
import ImageSlider from './components/ImageSlider';
import DestinationVideo from "./components/DestinationVideo";




function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
   
    dispatch(signout({
      
    }));
  };

  return (
   <div >
    <BrowserRouter>
    
      <div className="grid-container">
      
      
      <Navigation/>
     
      <main>





      <Route path="/DestinationHomeScreen" exact component={DestinationHomeScreen}></Route>
      <Route path="/Map_admin" exact component={Map_admin}></Route>        
      <Route path="/Map_cus" exact component={Map_cus}></Route>    
      <Route path="/FFMM1" exact component={FFMM1}></Route>
      <Route path="/addDestination" exact component={CreateDestination}></Route>
      <Route path="/editDestination/:id" exact component={EditDestination}></Route>
      <Route path="/Destination/:id" exact component={DestinationDetails}></Route>       
      <Route path="/ImageSlider" exact component={ImageSlider}></Route>
      <Route path="/DestinationVideo" exact component={DestinationVideo}></Route>


      <Route path="/hspRegister" exact component={HSPRegistrationScreen}></Route>

      <Route path="/ServiseProviderLogingCategory" exact component={ServiceProviderLoginCategoryScreen}></Route>
    <PrivateRoute path="/guideRegister" exact  component={GuideRegister}></PrivateRoute>
    <Route path="/guidelogin" exact  component={GuideSigninScreen}></Route>








      <Route path="/hotels" exact component={HotelsScreen}></Route>
      <Route path="/rooms" exact component={RoomsScreen}></Route>
      <Route path="/guides" exact component={GuideDisplayList}></Route>
      <PrivateRoute path="/guide/details/:id" exact component={OneGuide}/>
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
      <AdminRoute path="/UserManagement/userlist" component={UserListScreen}></AdminRoute>
      

      </Switch>

      
      <Switch>

      <HotelServiceProviderRoute path="/HotelSPDashBoard" exact component={AdminHotelManagement}></HotelServiceProviderRoute>
      <HotelServiceProviderRoute path="/hotellist/hotelSP" exact component={HotelList}></HotelServiceProviderRoute>
      <HotelServiceProviderRoute path="/bookingList/hotelSP" component={UserListScreen}></HotelServiceProviderRoute>
      

      </Switch>


      <GuideRoute path="/guidebookingdetails/:id" exact component={GuideBookingDetailsEdit}/>
      <GuideRoute 
path="/myGuideprofileConformation" exact component={MyGuideprofileConformation}/>
<GuideRoute path="/guide/viewTouristProfile/:userId" exact component={TouristDetails}/>
 <GuideRoute path="/guideProfile" exact component={MyGuideProfile}/>
 <GuideRoute path="/guide/edit/:id" exact component={EditGuide}/>
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
      <AdminRoute path="/user/:id/edit"  component={UserEditScreen}></AdminRoute>
        
      <Route path="/" exact component={HomeScreen}></Route>
      </main>
      <footer className="mt-auto">All right reserved</footer>
    </div>
    </BrowserRouter>
    </div>
  );
  
}

export default App;
