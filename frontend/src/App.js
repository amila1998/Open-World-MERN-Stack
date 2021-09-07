import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter,Link, Route } from 'react-router-dom';
import { signout } from './actions/userAction';
import HotelsScreen from './screens/HotelsScreen';
import HomeScreen from './screens/HomeScreen';
import HotelDetailsScreen from './screens/HotelDetailsScreen';
import SigninScreen from './screens/SigninScreen';
import RegisterScreen from './screens/UserRegister';

function App() {

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };


  return (
    <BrowserRouter>
<div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/"><img src="/images/logo.png" alt="Open World"></img></a>
        </div>
            <div>
                <div className="dropdown">
                    <button className="dropbtn">categories  
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <a href="/hotels">Hotels</a>
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
                 
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                 
                  </div>
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
        </div>
      </header>
      <main>
      
      <Route path="/hotels" exact component={HotelsScreen}></Route>
      <Route path="/hotelDetails/:Htlid" exact component={HotelDetailsScreen}></Route>
      <Route path="/register" component={RegisterScreen}></Route>
      <Route path="/signin" component={SigninScreen}></Route>
      <Route path="/" exact component={HomeScreen}></Route>
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
