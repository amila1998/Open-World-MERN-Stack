import React,{useState,useEffect} from "react"
import {useHistory, useParams} from 'react-router-dom';
import axios from "axios";
 
const EditGuide = ()=>{
 
     let history = useHistory();
     const {id} =useParams();
 
    const [guide,addGuide] = useState({
            firstName:"",
            lastName:"",
            age:"",
            phone:"",
            email:"",
            gender:"" ,
            licence:"",
            education:"",
            languages:""
    });

    const changeOnClick =(e)=>{
      e.preventDefault();
       var arr=[];
       var s=document.getElementById('Sinhala');
       if(s.checked){
         arr.push("Sinhala");
       }
      
       var s=document.getElementById('English');
       if(s.checked){
         arr.push("English");
       }
         
       var s=document.getElementById('Tamil');
       if(s.checked){
         arr.push("Tamil");
       }
        
       var s=document.getElementById('Japaneese');
       if(s.checked){
         arr.push("Japaneese");
       }
        
       var s=document.getElementById('Chineese');
       if(s.checked){
         arr.push("Chineese");
       }
         
       var s=document.getElementById('Hindi');
       if(s.checked){
         arr.push("Hindi");
       }
      }

 const {firstName,lastName,age,phone,email,gender,licence,education,languages}=guide;
 const onInputChange = e=>{
     addGuide({...guide,[e.target.name]: e.target.value});
 };
 
 const onSubmit=async e =>{
     e.preventDefault();
     await axios.put(`http://localhost:8070/guideR/update/${id}`,guide);
     history.push(`/guideProfile/${id}`);
     alert(" Successfully Updated Guide Details")
 }


 
 const loadGuide = async()=>{
    const res = await axios.get
        (`http://localhost:8070/guideR/${id}`)
        addGuide(res.data.guide)
      }
      useEffect(()=>{
        loadGuide();
    },[]);
  
    return(
 
      <div className="gubody">
      <div className="container ">
        <div className="w-75 mx-auto shadow p-5 formbodyadd">
            <h2 className ="text- mb-10">Edit Guide Details</h2>
            <hr/>   <br></br>
    <form onSubmit={e=>onSubmit(e)}>
  
  
   
  
    <br/>
 
<div class="row">
  <div class="col">
    <input 
        type="text" 
        class="form-control" 
        placeholder="Enter First Name" 
        name="firstName"
        value={firstName}
        onChange={e=>onInputChange(e)}
        required/>
  </div>
  <div class="col">
    <input 
        type="text" 
        class="form-control" 
        placeholder="Enter Last Name" 
        name="lastName"
        value={lastName}
        onChange={e=>onInputChange(e)}
        required/>
  </div>
</div>
  
  <br/>
<div class="form-floating mb-3">
  <input 
         type="text" 
         class="form-control" 
         id="floatingInput" 
         placeholder="Guide Age"
         name="age"
         value={age}
         onChange={e=>onInputChange(e)}
         required/>
  <label 
         for="floatingInput">Guide Age</label>
  </div>
 
  <div class="form-floating mb-3">
  <input 
         type="text" 
         class="form-control" 
         id="floatingInput" 
         placeholder="Enter Phone Number"
         name="phone"
         value={phone}
         onChange={e=>onInputChange(e)}
         required/>
  <label 
         for="floatingInput">Phone Number</label>
  </div>

  
  <div class="form-floating mb-3">
  <input 
         type="email" 
         class="form-control" 
         id="floatingInput" 
         placeholder="Enter Your Email"
         name="email"
         value={email}
         onChange={e=>onInputChange(e)}
         disabled
         required
        />
  <label 
         for="floatingInput">Email Address</label>
  </div>

  
  <div className="form-check">
  <p>Gender</p>
  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked={gender==="Male"}
  value="Male" name="gender"
  onChange={e=>onInputChange(e)}/>
  <label className="form-check-label" for="flexRadioDefault1">
    Male
  </label> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
 
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked={gender==="Female"}
  value="Female" name="gender"
  onChange={e=>onInputChange(e)}/>
  <label class="form-check-label" for="flexRadioDefault2">
    Female
  </label>
</div>
<br/>
 


<div className="form-check">
  <p>Do you have a Guide Licence</p>
  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked={licence==="Yes"}
  value="Yes" name="licence"
  onChange={e=>onInputChange(e)}/>
  <label className="form-check-label" for="flexRadioDefault1">
    Yes
  </label> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
 
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"checked={licence==="No"}
  value="No"  name="licence"
  onChange={e=>onInputChange(e)}/>
  <label class="form-check-label" for="flexRadioDefault2">
    No
  </label>
</div>
<br/>
 
<div className="form-check">
  <p>Education Qulification</p>
  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked={education==="O/L"}
  value="O/L"  name="education"
  onChange={e=>onInputChange(e)}/>
  <label className="form-check-label" for="flexRadioDefault1">
    O/L
  </label> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
 
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"checked={education==="A/L"}
  value="A/L"  name="education"
  onChange={e=>onInputChange(e)}/>
  <label class="form-check-label" for="flexRadioDefault2">
    A/L
  </label> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
 
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked={education==="Higher Education"}
  value="Higher Education"  name="education"
  onChange={e=>onInputChange(e)}/>
  <label className="form-check-label" for="flexRadioDefault1">
    Higher Education
  </label>
 
  </div>
  <br/>

  <div className="form-check">
  <p>Languages that you can .?</p>
  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
  <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1"
  value="Sinhala"  name="languages"
  onChange={e=>onInputChange(e)}/>
  <label className="form-check-label" for="flexRadioDefault1">
    Sinhala
  </label> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 
  <input class="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault2"
  value="English"    name="languages"
  onChange={e=>onInputChange(e)}/>
  <label class="form-check-label" for="flexRadioDefault2">
    English
  </label>
</div>
 
<div className="form-check" >
  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
  <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1"
  value="Tamil"   name="languages"
  onChange={e=>onInputChange(e)}/>
  <label className="form-check-label" for="flexRadioDefault1">
    Tamil
  </label> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 
  <input class="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault2"
  value="Japaneese"   name="languages"
  onChange={e=>onInputChange(e)}/>
  <label class="form-check-label" for="flexRadioDefault2">
    Japaneese
  </label>
</div>
 
<div className="form-check">
  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
  <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1"
  value="Chineese"  name="languages"
  onChange={e=>onInputChange(e)}/>
  <label className="form-check-label" for="flexRadioDefault1">
    Chineese
  </label> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
 
  <input class="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault2"
  value="Hindi"
  onChange={e=>onInputChange(e)}/>
  <label class="form-check-label" for="flexRadioDefault2">
    Hindi
  </label>
</div>
 
<br/>

<lable class="label-title"><b>Add a Image*</b>
       <div class="mb-3">
  <input class="form-control" type="file" id="formFile" filename="packageImage" />
</div></lable>




 
<button type="submit" class="btn btn-primary">Edit Guide</button>
 
</form>
</div>
</div>
</div>
    );
};
 
export default EditGuide;