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

import Feature from './screens/Feature';
import AboutUsScreen from './screens/AboutUsScreen';

import MyBookingsScreen from './screens/MyBookingsScreen';
import HSPDashBoardScreen from './screens/HSPDashBoardScreen';
import MyHotelsScreen from './screens/MyHotelsScreen';
import MyRoomList from './screens/MyRoomLists';
import HSPRoomAddScreen from './screens/HSPRoomAddScreen';
import HSPRoomEditScreen from './screens/HSPRoomEditScreen';
import HSPHotelEditScreen from './screens/HSPHotelEditScreen';
import cart from './components/cart';
import app from './creditcard/app';
import mypaymentDetails from './screens/mypaymentDetails';
import HotelRoomBookingpayment from './components/HotelRoomBookingpayment';
import HotelRoomBookingpaymentList from './components/mypay';


import Adventure from './components/adventure';
import Booking from './components/Booking';
import AdventureList from './components/adventureList';
import AdventureOne from './components/adventureOne';
import adminbooking from './components/adminbooking';
import adventureadd from './components/adventureadd';
import AdminGuideDisplayList from './components/AdminGuideManagement';


import Vehicle from './components/Vehicle';
import vbookings from './components/vbookings';
import VehicleHomeScreen from './components/VehicleHomeScreen';
import CreateVehicle from './components/CreateVehicle';
import CreateV_bookings from './components/CreateV_bookings';
import EditVehicle from './components/EditVehicle';
import VehicleScreen from './components/VehicleScreen';

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






      <br/>
      <br/>

      <Route path="/DestinationHomeScreen" exact component={DestinationHomeScreen}></Route>
      <Route path="/Map_admin" exact component={Map_admin}></Route>        
      <Route path="/Map_cus" exact component={Map_cus}></Route>    
      <Route path="/FFMM1" exact component={FFMM1}></Route>
      <Route path="/addDestination" exact component={CreateDestination}></Route>
      <Route path="/editDestination/:id" exact component={EditDestination}></Route>
      <Route path="/Destination/:id" exact component={DestinationDetails}></Route>       
      <Route path="/ImageSlider" exact component={ImageSlider}></Route>
      <Route path="/DestinationVideo" exact component={DestinationVideo}></Route>




      
        <Route path="/vehicle" exact component={Vehicle}></Route>
      <Route path="/vbookings" exact component={vbookings}></Route>
      <Route path="/VehicleHomeScreen" exact component={VehicleHomeScreen}></Route>
      <Route path="/CreateVehicle" exact component={CreateVehicle}></Route>
      <Route path="/CreateV_bookings" exact component={CreateV_bookings}></Route>
      <Route path="/EditVehicle/:id" exact component={EditVehicle}></Route>
      <Route path="/VehicleScreen/:id" exact component={VehicleScreen}></Route>


      <Switch>
          <Route path="/one_adventures/:id" component={ AdventureOne }></Route>
          <Route path="/AdventureList" component={ AdventureList }></Route>
          <Route path="/Booking/:id" component={ Booking }></Route>
          <Route path="/adminbooking" component={ adminbooking }></Route>
          <Route path="/adventureadd" component={ adventureadd }></Route>
          <Route path="/Adventure" component={ Adventure }></Route>
        </Switch>




      <Route path="/aboutus"exact component={AboutUsScreen}></Route>
      <Route path="/feature" exact component={Feature}></Route>
      <Route path="/hspRegister" exact component={HSPRegistrationScreen}></Route>

      <Route path="/ServiseProviderLogingCategory" exact component={ServiceProviderLoginCategoryScreen}></Route>

      <PrivateRoute path="/myBookings" exact  component={MyBookingsScreen}></PrivateRoute>

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
            exact  component={HotelEditScreen}
            
          ></AdminRoute>

      
        <HotelServiceProviderRoute
            path="/hotel/hotelDetails/:Htlid/edit/hsp"
            exact  component={HSPHotelEditScreen}
            
          ></HotelServiceProviderRoute>
      
        
      <Route path="/:hotelId/roomDetails/:roomId" exact component={RoomDetailsScreen}></Route>
      <AdminRoute path="/addARoom/:hotelId" exact  component={RoomAddScreen}></AdminRoute>
      <AdminRoute path="/room/:hotelId/roomDetails/:roomId/edit" exact component={RoomEditScreen}></AdminRoute>
      <AdminRoute path="/roomlist/:hotelId" exact  component={RoomList}></AdminRoute>
      
      <HotelServiceProviderRoute path="/addARoom/:hotelId/hsp" exact component={HSPRoomAddScreen}></HotelServiceProviderRoute>
      <HotelServiceProviderRoute path="/room/:hotelId/roomDetails/:roomId/edit/hsp" exact component={HSPRoomEditScreen}></HotelServiceProviderRoute>
      <HotelServiceProviderRoute path="/myroomlist/:hotelId" exact  component={MyRoomList}></HotelServiceProviderRoute>

      <Route path="/register" exact component={RegisterScreen}></Route>
      <Route path="/signin" exact component={SigninScreen}></Route>
      
      <Route path="/settings" exact component={Settings}></Route>

      <Switch>
     
      <AdminRoute path="/HotelManagement" exact component={AdminHotelManagement}></AdminRoute>
      <AdminRoute path="/HotelManagement/hotellist" exact component={HotelList}></AdminRoute>
      <AdminRoute path="/UserManagement/userlist" exact component={UserListScreen}></AdminRoute>
      <AdminRoute path="/PaymentManagement/cardslist" exact component={cart}/>
      <AdminRoute path="/PaymentManagement/HotelRoomBookingpayment" exact component={HotelRoomBookingpaymentList}/>
      <AdminRoute path="/GuideManagement/guidelist" exact component={AdminGuideDisplayList}></AdminRoute>
     
      </Switch>

      
      <Switch>

      <HotelServiceProviderRoute path="/hspProfile" exact component={HSPDashBoardScreen}></HotelServiceProviderRoute>
      <HotelServiceProviderRoute path="/myHotels" exact component={MyHotelsScreen}></HotelServiceProviderRoute>
      <HotelServiceProviderRoute path="/bookingList/hotelSP" exact component={UserListScreen}></HotelServiceProviderRoute>
      

      </Switch>


      <GuideRoute path="/guidebookingdetails/:id" exact component={GuideBookingDetailsEdit}/>
      <GuideRoute 

path="/myGuideprofileConformation" exact component={MyGuideprofileConformation}/>
<GuideRoute path="/guide/viewTouristProfile/:userId" exact component={TouristDetails}/>
 <GuideRoute path="/guideProfile" exact component={MyGuideProfile}/>
 <GuideRoute path="/guide/edit/:id" exact component={EditGuide}/>

      <PrivateRoute
     
            path="/UpdateUserProfile"
            exact   component={UpdateUserProfile}
          ></PrivateRoute>
          <PrivateRoute path="/mypaymentDetails" exact component={mypaymentDetails}/>
          <PrivateRoute path="/addanewcard" exact component={app}/>
          <PrivateRoute
            path="/profile"
            exact   component={UserProfile}
          ></PrivateRoute>

        <PrivateRoute path="/payment/:hbid" exact component={HotelRoomBookingpayment}/>






        <HotelServiceProviderRoute
            path="/ServiceProviderDashboard"
            exact  component={ServiceProviderDashboardScreen}
      ></HotelServiceProviderRoute>
    
      
      <AdminRoute
            path="/adminDashboard"
            exact    component={AdminDashboardScreen}
      ></AdminRoute>
      <AdminRoute path="/user/:id/edit" exact  component={UserEditScreen}></AdminRoute>
        
      <Route path="/" exact component={HomeScreen}></Route>
      </main>
      <footer className="mt-auto"id="q2"><center>All right reserved</center></footer>
    </div>
    </BrowserRouter>
    </div>
  );
  
}

export default App;
