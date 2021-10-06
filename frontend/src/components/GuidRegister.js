import React,{useReducer, useState} from "react"
import {useHistory} from 'react-router-dom';
import axios from "axios";
import '../styles/guide.css'
import { useSelector } from "react-redux";
 
const GuideRegister = ()=>{
 
     let history = useHistory();
     const userSignin = useSelector((state) => state.userSignin);
     const { userInfo } = userSignin;
 
     const[firstName,setfirstName]=useState("");
     const[lastName,setlastName]=useState("");
     const[age,setage]=useState("");
     const[gender,setgender]=useState("");
     const[phone,setphone]=useState("");
     const[email,setemail]=useState("");
     const[licence,setlicence]=useState("");
     const[education,seteducation]=useState("");
     const[languages,setlanguages]=useState("");
     const[message,setMessage]=useState("");
     const[guideImg,setFileName]=useState("");
     //const[password,setPassword]=useState("");
     //const[repassword,setRePassword]=useState("");
   
     const onChangeFile= e=>{
         setFileName(e.target.files[0]);
     }
   
   const changeOnClick =(e)=>{
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

      
   
    
       
   
      
    const formData=new FormData();
    formData.append("firstName",firstName);
    formData.append("lastName",lastName);
    formData.append("age",age);
    formData.append("phone",phone);
    formData.append("email",userInfo.email);
    formData.append("gender",gender);
    formData.append("licence",licence);
    formData.append("education",education);
    formData.append("languages",arr);
    formData.append("guideImg",guideImg);
    //formData.append("password",password);

    setfirstName("");
    setlastName("");
    setage("");
    setphone("");
    setemail("");
    setgender("");
    setlicence("");
    seteducation("");
    setlanguages("");
    //setPassword("");
    //setRePassword("");


    axios
    .post(`http://localhost:8070/guideR/add/${userInfo._id}`,formData)
    .then(
     
      (res)=>{
        console.log(res.data)
      setMessage(res.data)
      localStorage.removeItem('userInfo')
      alert(" Registeration Successful")
      
      history.push("/guideProfile");
     })
     
    .catch((err)=>{
        console.log(err);
      alert(" Registeration Failed")

    });
 
   
      
   };


    return(
      <div >
    
        <div className="container ">
        <div className="w-75 mx-auto shadow p-5 formbodyadd">
            
    <div  encType="multipart/form-data" >
    <h1 >Guide Registration</h1>
  
     
    <br></br>
  
  
    
<div className="row">
  <div className="col">
    <input 
        type="text" 
        className="form-control" 
        placeholder="Enter First Name" 
        name="firstName"
        value={firstName}
        onChange={(e)=>setfirstName(e.target.value)}
        required/>
  </div>
  <div className="col">
    <input 
        type="text" 
        className="form-control" 
        placeholder="Enter Last Name" 
        name="lastName"
        value={lastName}
        onChange={(e)=>setlastName(e.target.value)}
        required/>
        
  </div>
</div>


<br/>

<div className="form-floating mb-3">
  <input 
         type="email" 
         className="form-control" 
         id="floatingInput" 
         placeholder="Enter Phone Number"
         name="email"
         value={userInfo.email}
         onChange={(e)=>setemail(e.target.value)}
         required
        />
  <label 
         for="floatingInput">Email Address</label>
  </div>

  <br/>
<div className="form-floating mb-3">
  <input 
         type="text" 
         className="form-control" 
         id="floatingInput" 
         placeholder="Guide Age"
         name="age"
         value={age}
         onChange={(e)=>setage(e.target.value)}
         required
         maxLength="2"/>
  <label 
         for="floatingInput">Guide Age</label>
  </div>

  <br/>
 
  <div className="form-floating mb-3">
  <input 
         type="text" 
         className="form-control" 
         id="floatingInput" 
         placeholder="Enter Phone Number"
         name="phone"
         value={phone}
         onChange={(e)=>setphone(e.target.value)}
         required
         maxLength="10"
         minLength="10"/>
  <label 
         for="floatingInput">Phone Number</label>
  </div>

 
  <div className="form-check">
  <p>Gender</p>
  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
  <input className="form-check-input" type="radio"  id="flexRadioDefault1" checked={gender==="Male"}
  value="Male" name="gender"
  onChange={(e)=>setgender(e.target.value)}/>
  <label className="form-check-label" for="flexRadioDefault1">
    Male
  </label> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
 
  <input className="form-check-input" type="radio"  id="flexRadioDefault2" checked={gender==="Female"}
  value="Female" name="gender"
  onChange={(e)=>setgender(e.target.value)}/>
  <label className="form-check-label" for="flexRadioDefault2">
    Female
  </label>
</div>
<br/>
 


<div className="form-check">
  <p>Do you have a Guide Licence</p>
  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
  <input className="form-check-input" type="radio" id="flexRadioDefault1" checked={licence==="Yes"}
  value="Yes" name="licence"
 onChange={(e)=>setlicence(e.target.value)}/>
  <label className="form-check-label" for="flexRadioDefault1">
    Yes
  </label> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
 
  <input className="form-check-input" type="radio" id="flexRadioDefault2"checked={licence==="No"}
  value="No"  name="licence"
 onChange={(e)=>setlicence(e.target.value)}/>
  <label className="form-check-label" for="flexRadioDefault2">
    No
  </label>
</div>
<br/>
 
<div className="form-check">
  <p>Education Qulification</p>
  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
  <input className="form-check-input" type="radio"  id="flexRadioDefault1" checked={education==="O/L"}
  value="O/L"  name="education"
 onChange={(e)=>seteducation(e.target.value)}/>
  <label className="form-check-label" for="flexRadioDefault1">
    O/L
  </label> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
 
  <input className="form-check-input" type="radio"  id="flexRadioDefault2"checked={education==="A/L"}
  value="A/L"  name="education"
 onChange={(e)=>seteducation(e.target.value)}/>
  <label className="form-check-label" for="flexRadioDefault2">
    A/L
  </label> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
 
  <input className="form-check-input" type="radio"  id="flexRadioDefault1" checked={education==="Higher Education"}
  value="Higher Education"  name="education"
 onChange={(e)=>seteducation(e.target.value)}/>
  <label className="form-check-label" for="flexRadioDefault1">
    Higher Education
  </label>
 
  </div>
  <br/>

  <div className="form-check">
  <p>Languages that you can .?</p>
  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
  <input className="form-check-input" type="checkbox"  id="Sinhala" 
  value="Sinhala"  name="languages" 
 onChange={(e)=>setlanguages(e.target.value)}/>
  <label className="form-check-label" for="flexRadioDefault1">
    Sinhala
  </label> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
 
  <input className="form-check-input" type="checkbox"  id="English"
  value="English"    name="languages"
 onChange={(e)=>setlanguages(e.target.value)}/>
  <label className="form-check-label" for="flexRadioDefault2">
    English
  </label>
</div>
 
<div className="form-check" >
  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
  <input className="form-check-input" type="checkbox"  id="Tamil" 
  value="Tamil"   name="languages"
 onChange={(e)=>setlanguages(e.target.value)}/>
  <label className="form-check-label" for="flexRadioDefault1">
    Tamil
  </label> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
 
  <input className="form-check-input" type="checkbox"  id="Japaneese"
  value="Japaneese"   name="languages"
 onChange={(e)=>setlanguages(e.target.value)}/>
  <label className="form-check-label" for="flexRadioDefault2">
    Japaneese
  </label>
</div>
 
<div className="form-check">
  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
  <input className="form-check-input" type="checkbox"  id="Chineese"
  value="Chineese"  name="languages"
 onChange={(e)=>setlanguages(e.target.value)}/>
  <label className="form-check-label" for="flexRadioDefault1">
    Chineese
  </label> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
 
  <input className="form-check-input" type="checkbox"  id="Hindi"
  value="Hindi" name="languages"
 onChange={(e)=>setlanguages(e.target.value)}/>
  <label className="form-check-label" for="flexRadioDefault2">
    Hindi
  </label>
</div>
 
<br/>
<lable className="label-title"><b>Add a Image*</b>
       <div className="mb-3">
  <input className="form-control" type="file" id="formFile" filename="packageImage" onChange={onChangeFile}/>
</div></lable>


<div>
<button onClick={changeOnClick} className="primary">Add Guide</button>

</div>
 

 
</div>
</div>
</div>
</div>
    );
};
 
export default GuideRegister;