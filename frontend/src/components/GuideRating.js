import React ,{useState} from "react";
import Reactstars from "react-rating-stars-component";
import { FiSend } from "react-icons/fi";
import axios from "axios";
import ImageCenterFocusStrong from "material-ui/svg-icons/image/center-focus-strong";
import { useSelector } from "react-redux";



export default function AddRating(props){

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
    const[user,setUserId] =useState('');
    const[name, setName] = useState('')
    const[comment, setComment] = useState('')
    const[rating, setRating] =useState(0)

    const ratingChanged = (rating)=>{
        alert(`you have given ${rating} star rating for us.`);
       setRating(rating)
         };
         console.log(ratingChanged);

         
         const onClick = async ()=>{
         if(comment){
          try{
            await axios.post('http://localhost:8070/guideRviewR', {
                user:userInfo._id,
                name,
                comment,
                rating,
                guideId:props.id
            })
            alert("Rating Added Sucessfull");
            
         }catch (error){
          alert("Somthing Wrong please try again later");
           }
         }else{
          alert("Please fill the comment section");
         }
       
         
        };
        

return(
      
<div className="container">  
<div className="app">
 <div>
    <div className="mb-3" >
    
    <div className="rating">   
           <Reactstars   size={40} value={rating}   onChange={ratingChanged}/>
    </div>
   
  <input required type="text" value={userInfo.name} onChange={(e)=> setName(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="add your name" disabled="true"/> <br></br>
  <input required type="textarea" value={comment} onChange={(e)=> setComment(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="add your comment"/>

 </div>
  
  {/* <button
   type="submit" 
   className="btn btn-primary"
   
  >Submit</button> */}

<button className="btn btn-success" onClick={onClick}>comment</button><hr/>


</div>
</div>
</div>
)
}
