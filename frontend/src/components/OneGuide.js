/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AddRating from './GuideRating';
import { AutoComplete } from 'material-ui';
import { useSelector } from 'react-redux';

const OneGuide = (props) => {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const guideSignin = useSelector((state) => state.guideSignin);
  const { guideInfo }=guideSignin;

  const [guide, setguide] = useState([]);




  const[guideemail, setguideemail] = useState('');

  const[startdate, setStartDate] = useState('');
  const[enddate, setEndDate] = useState('');
  const[message, setmessage] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const id = props.match.params.id;
    axios.get(`http://localhost:8070/guideR/${id}`).then((res) => {
      if (res.data.success) {
        setguide(res.data.guide);
      }
    });
  };

  const onClick = async ()=>{
    if (startdate && enddate) {
      try {
        const res = await axios.post('http://localhost:8070/guideBookingR', {
          user:userInfo._id,
          startdate,
          enddate,
          message,
          guideId: props.match.params.id,
        });
        console.log(res);
        alert('Request Successfull');
      } catch (err) {
        alert('Request Successfull');
       window.location.replace("/guide")
      }
    } else {
      alert('Please Fill Email and Date');
    }
      
    };

  const { firstName, lastName, age, phone,email, gender, licence, education, languages, guideImg } =
    guide;

  return (
    <div className='gubody'>
      <div className='container' style={{ marginTop: '0px' }}>
        <br></br>
        <br></br>

        <div class='card' style= {{width: "75%", margin:'auto'}} >
          <img src={`/uploads/${guideImg}`} alt='...' class='img-thumbnail' />
          <center><h2>{firstName} {lastName}</h2></center>
          <dl className="row"style = {{marginLeft:'20px'}}>

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
<dd className="col-sm-6">{languages}</dd></dl>
          <AddRating id={props.match.params.id}/>
          <br />
        
          <center>
    <ul> 
          <button type='submit' class='btn btn-primary'style={{width:'150px'}}>
            <Link to='/guides' style={{ textDecoration: 'none', color: 'white' }}>
              Back
            </Link>
          </button>
          &nbsp;&nbsp;&nbsp;
         
             <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" style={{width:'150px'}}>
             Request
           </button>
         
         

          
          </ul></center>
      
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Send Appoinment</h5>
        <button type="button"  data-bs-dismiss="modal" class="btn-close" ></button>
      </div>
      
      <div class="modal-body">
          

          <div class="mb-3">
            <label  class="col-form-label">Your Name</label>
            <input type="text" class="form-control" id="recipient-name"  placeholder='your name'
              value={userInfo.name}
              name="fname"
              disabled="true"
              />
          </div>
          <div class="mb-3">
            <label  class="col-form-label">Start Date</label>
            <input
              type='date'
              value={startdate}
              onChange={(e) => {
                setStartDate(e.target.value);
              }}
            />
          </div>
          <div class="mb-3">
            <label  class="col-form-label">End Date</label>
            <input
              type='date'
              value={enddate}
              onChange={(e) => {
                setEndDate(e.target.value);
              }}
            />
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">Message:</label>
            <textarea class="form-control" id="message-text" value={message}
              name="message"
              onChange={(e)=> setmessage(e.target.value)}></textarea>
          </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
        <button type="submit" class="btn btn-success" onClick={onClick}>Send</button>
      </div>
   
    </div>
  </div>
</div>
         
        </div>
      </div>

      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};
export default OneGuide;
