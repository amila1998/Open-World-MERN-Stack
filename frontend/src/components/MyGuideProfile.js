import React, {Component} from 'react';
import axios from "axios";
 
export default class MyGuideProfile extends Component {
 
  constructor(props){
    super(props);
    this.state={
      guide:{}
    };
  }
 
  componentDidMount(){
    const id = this.props.match.params.id;
    axios.get(`http://localhost:8070/guide/${id}`).then((res)=>{
      if (res.data.success){
         this.setState({
      guide:res.data.guide
    });
      }
    });
  }

  onDelete=(id)=>{
    axios.delete(`http://localhost:8070/guide/delete/${id}`).then((res)=>{
      alert("Guide Details Delete SuccessFully");
      window.location.replace('/');
     
    })
  }

  onRequest=(guideemail)=>{
    window.location.replace(`/viewrequest/${guideemail}`);
  }
   

render(){
    const id = this.props.match.params.id;
 
const {firstName,lastName,age,phone,email,gender,licence,education,languages,guideImg} = this.state.guide;
 
  return(
    <div className="gubody"> 
    <div className="container"style={{
        backgroundColor: 'white',
        width: '1000px'}}>&nbsp;
      <h4>{firstName} &nbsp; {lastName}</h4>
      <hr/>      
      <img src={`/uploads/${guideImg}`} alt="..." class="img-fluid rounded-start"/>
      &nbsp;
    <dl className="row">
    
             <dt className="col-sm-5">Gender</dt>
             <dd className="col-sm-6">{gender}</dd>
 
             <dt className="col-sm-5">Age</dt>
             <dd className="col-sm-6">{age}</dd>
 
             <dt className="col-sm-5">Education Qulification</dt>
             <dd className="col-sm-6">{education}</dd>
 
             <dt className="col-sm-5">Licence</dt>
             <dd className="col-sm-6">{licence}</dd>
 
             <dt className="col-sm-5">Phone No</dt>
             <dd className="col-sm-6">{phone}</dd>

             <dt className="col-sm-5">Email Address</dt>
             <dd className="col-sm-6">{email}</dd>
 
             <dt className="col-sm-5">Languages</dt>
             <dd className="col-sm-6">{languages}</dd>

 
             
    </dl> <center>  
    <button type="submit" class="btn btn-primary" ><a href={`/guide/edit/${id}`} style={{textDecoration:'none' ,color:'white'}} >Update</a></button>
    &nbsp;&nbsp;&nbsp;
        <button type="submit" class="btn btn-primary" onClick={()=>this.onDelete(id)}>Delete</button>&nbsp;&nbsp;&nbsp;
        <button type="submit" class="btn btn-primary" onClick={()=>this.onRequest(email)} >Check Request</button></center>
<br/>
 <br>
 </br>
    </div>
    <br>
</br>
<br>
</br>

<br/>
<br/>

 </div>
  )
}
}