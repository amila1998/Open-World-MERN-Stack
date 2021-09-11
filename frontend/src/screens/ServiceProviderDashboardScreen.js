//import react from 'react';
//import axios from 'axios';
import React, {  } from 'react';
import Sidebar from '../components/ServiceProviderSidebar';
//import { useDispatch, useSelector } from 'react-redux';
//import { Link } from 'react-router-dom';
//import Rating from '../components/Rating';
//import LoadingBox from '../components/LoadingBox';
//import MessageBox from '../components/MessageBox';
//import { detailRoom } from '../actions/roomAction';
//import data from '../data';


export default function ServiceProviderDashboardScreen(props){

   
  return (
    <div>

      <div id="split1">
      <div id="left1">
          <Sidebar/>
        </div>
        
            <div class="right1">
            <h2>Sidebar Dropdown</h2>
            <p>Click on the dropdown button to open the dropdown menu inside the side navigation.</p>
            <p>This sidebar is of full height (100%) and always shown.</p>
            <p>Some random text..</p>
            </div>
    </div>
    </div>
   
  );
}