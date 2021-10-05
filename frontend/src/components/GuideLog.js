import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useSelector } from 'react-redux';



export default function InqView (){
   
    const guideSignin = useSelector((state) => state.guideSignin);
    const { guideInfo }=guideSignin;
	const [email,setEmail] = useState("");
   
   
    const getData =async (e)=>{
        
        e.preventDefault();


        const email1 = email;
        const url="http://localhost:8070/guideR/view/";

     
        const res = await axios.get(url+email1).then((res)=> {

        document.getElementById("firstName").innerHTML =res.data.firstName;
        document.getElementById("lastName").innerHTML =res.data.lastName;
        document.getElementById("age").innerHTML =res.data.age;
        document.getElementById("gender").innerHTML =res.data.gender;
        document.getElementById("phone").innerHTML =res.data.phone;
        document.getElementById("email").innerHTML =res.data.email;
        document.getElementById("licence").innerHTML =res.data.licence;
        document.getElementById("education").innerHTML =res.data.education;
        document.getElementById("languages").innerHTML =res.data.languages;
        document.getElementById("guideImg").innerHTML =res.data.guideImg;

        const mongoid=res.data.id;
          
       
           if(res=true) {
                alert("You are a valid user");
                window.location.replace("/guideProfile/" + mongoid)

           }
           if(res=false) {
                window.location.replace("/guidelogin")  
           }
           

            }).catch((err)=>{
            alert('You Are Not a Verified User!!');
            window.location.replace("/guidelogin") 

    })

    }


    return(
        <div >
            <body>

                <div ><center>
		            <form   >
			
                    <h3>Conform Your Email</h3>
                       <br/>
			            <input class="form-control" style={{width:"350px"}} type="email" id ="email" placeholder="Please Enter Your Email" value={guideInfo.email} onChange={(e)=>{  setEmail(e.target.value) ; }}/>
                        <br/>
                        <a>
			                <button  className="btn mt-3 btn-dark"  style={{textDecoration:'none',color:'white'}} onClick={getData}>
                            <i className="fa fa-arrow-circle-right"></i> Conform
                            </button>
                        </a>
                    </form>
                    </center>

                    < div style={{visibility: 'hidden'}} >
                        <h1 id="firstName" ></h1>
                        <h2 id="lastName" ></h2>
                        <h2 id="age" ></h2>
                        <h2 id="gender" ></h2>
                        <h2 id="phone" ></h2>
                        <h1 id="email" ></h1>
                        <h2 id="licence" ></h2>
                        <h2 id="education" ></h2>
                        <h2 id="languages" ></h2>
                        <h2 id="guideImg" ></h2>

                    </div>
	            </div>
                </body>
            </div>
         

            )
    }