import React,{Component} from 'react'
import axios from 'axios';
import '../styles/guide.css'
import Reactstars from "react-rating-stars-component";
import ReactToPrint from "react-to-print";



export default class AdminGuideDisplayList extends Component{
 
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


<br/><h1 style={{fontSize:'30px',color:"white"}}><b><center>Guide Management</center></b></h1>


  
  

 

</div>


  

<div class="form-outline mb-2 ">
                <ReactToPrint
                  trigger={() => (
                    <button
                      type="button"
                      class="btn btn-danger"
                      style={{ marginInlineStart: "90%" }}
                    >
                      <i class="fas fa-print mr-2"></i>Print this out!
                    </button>
                  )}
                  content={() => this.componentRef}
                />
              </div>
            </div>

            <div ref={(Component) => (this.componentRef = Component)}>
              <hr />
              <div
                style={{ marginInlineEnd: "10px", marginInlineStart: "10px" }}
              >
                <table
                  class="table"
                  style={{ backgroundColor: "hsla(90, 0%, 100%, 0.9)" }}
                >
                  <thead class="thead-dark">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Guide Name</th>
                      <th scope="col">Languages</th>
                      <th scope="col">Contact Number</th>
                      <th scope="col">Gender</th>
                      <th scope="col">Guide Licence</th>
                      <th scope="col">Guide Education</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                  {this.state.guide.map((guide, idx) => (
                      <tr key={idx} style={{ fontWeight: "bold" }}>
                        <th scope="row">{idx + 1}</th>
                        <td>{guide.firstName}  {guide.lastName}</td>
                        <td>{guide.languages}</td>
                        <td>{guide.phone}</td>
                        <td>{guide.gender}</td>
                        <td>{guide.licence}</td>
                        <td>{guide.education}</td>


                  


                      </tr>
                    ))}
                  </tbody>
                </table>
</div>















 
 <br/><br/><br/>
    </div>
    </div>
 
  )
}
 
}