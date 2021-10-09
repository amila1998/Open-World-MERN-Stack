import React,{Component} from 'react'
import axios from 'axios';
import { Row } from 'react-bootstrap';
import '../styles/guide.css'
import Reactstars from "react-rating-stars-component";
import Slider from "./GuideSlider";
import GuideLog from "./GuideLog";


export default class GuideDisplayList extends Component{
 
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
        
      
        <br/>
<div>


<br/><h5><p><b><center>All Destinations</center></b></p></h5>


  
  

 

</div>

<br/>

<Slider/>

<h4 style={{color:"white"}}><p>Steering the way in Sri Lanka
Tourist guides provides the visitor with in depth knowledge in their mother tongue, smoothing creases and wrinkles that is bound to occur while touring a foreign country for the first time. It is best to choose a tourist guide who had been professionally trained and authorized by Sri Lanka tourism, who are categorized as National Tourist Guides or Chauffeur Tourist Guides. The National Tourist Guides caters to a large group of tourists traveling in luxury coaches driven by reserved drivers while Chauffeur Tourist Guides would be guiding small groups conveyed in small vans and luxury cars.</p></h4>





          


<div     class="d-flex flex-row align-items-center mb-2"
              style={{
                backgroundColor: "hsla(101, 27%, 53%, 0.27)",
                paddingBottom: "5px",
                paddingTop: "7px",
                height:"70px"
                
              }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              
              <h1 style={{paddingRight:"30%"}}></h1>
           
                    <input
                      id="search-input"
                      type="search"
                      id="form1"
                      class="form-outline form-control"
                      style={{width:"600px",marginInlineStart:"14%"}}
                      placeholder="Search By Languages"
                      onChange={this.handleSearchArea}
                      handleinput handleSearchArea
                    />
                 
                  <button
                    id="search-button"
                    type="button"
                    class="btn btn-primary"
                  >
                    <i class="fas fa-search"></i>
                  </button>
            </div>
           
           
           










 
 <br/><br/>
  
      

 <Row xs={1} md={1} className="g-4" id="by" class="rounded" >
  {this.state.guide.map((guide, idx) => (

<div class="card mb-8" style={{width: "180%"}}>
  <div class="row g-0">
    <div class="col-md-4"><br/><br/>
      <img src={`/uploads/${guide.guideImg}`} alt="..." class="img-thumbnail"/>
    </div>
    <div class="col-md-8">
      <div class="card-body"><br/><br/>
        <h4 class="card-title">{guide.firstName}  {guide.lastName}</h4>
        <h5 class="card-title">Languages: {guide.languages}</h5>
        <h5 class="card-title">Phone Number: {guide.phone}</h5>
        <h5 class="card-title">Gender: {guide.gender}</h5>
        <h5 class="card-title"> <Reactstars edit={false}  size={40} value={Math.floor(guide.reviewsAvg)}/> {guide.reviewsAvg}</h5>
        <a type="button" class="btn btn-primary" href={`/guide/details/${guide.id}`}>
         View Guide Details
        </a>
     
      </div>
    
    </div>
    
  </div>
</div>

))}

</Row>

    
 
 <br/><br/><br/>
    </div>
    </div>
 
  )
}
 
}