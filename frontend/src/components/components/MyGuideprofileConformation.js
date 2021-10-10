import React,{Component} from 'react'
import axios from 'axios';
import { Row } from 'react-bootstrap';
import '../styles/guide.css'
import Reactstars from "react-rating-stars-component";
import Slider from "./GuideSlider";
import GuideLog from "./GuideLog";


export default class MyGuideprofileConformation extends Component{
 
constructor(props){
  super(props);
  this.state={
    guide:[]
  };
}
 
componentDidMount(){
  this.retrieveGuide();
}
 
retrieveGuide(){
  axios.get("http://localhost:8070/guideR").then(res =>{
    if(res.data.success){
      this.setState({
        guide:res.data.existingGuide
      });
    console.log(this.state.guide);
    }
  });
}
 
onDelete=(id)=>{
  axios.delete(`http://localhost:8070/guideR/delete/${id}`).then((res)=>{
    alert("Guide Details Delete SuccessFully");
    this.retrievePosts();
  })
}
 
filterData(guide,searchkey){
  const result = guide.filter((guide) =>
 guide.firstName.toLowerCase().includes(searchkey)||
 guide.lastName.toLowerCase().includes(searchkey)||
 guide.age.toLowerCase().includes(searchkey)
  )
  this.setState({guide:result})
}
 
handleSearchArea=(e)=>{
  const searchkey = e.currentTarget.value;
 
  axios.get("http://localhost:8070/guideR").then(res =>{
    if(res.data.success){
      this.filterData(res.data.existingGuide,searchkey)
    }
  });
}


 
render(){
  return(

    
    
      <div className="gubody">
      <div className="container">
        
      
        <br/><center>
<div>

 

</div>



<h4 style={{color:"white"}}><p>Before Showing your Profile we need to conform is that You Are. So You need to enter again your email. </p></h4>
<h4 style={{color:"white"}}><p>Press the Ready Button to enter Your Email</p></h4>




          



  <br/><br/>
 

<button data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" type="button" class="primary" style={{float:"center"}}>Ready</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Guide Email Conformation</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <GuideLog/>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

</center>
<br/>
    </div>
    </div>
 
  )
}
 
}