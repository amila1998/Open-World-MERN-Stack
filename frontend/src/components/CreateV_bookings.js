import React, { Component } from 'react';
import axios from 'axios';

import '../styles/vehicleDetails.css';
import '../styles/RV_booking.css';



export default class CreateV_bookings extends Component {

    constructor(props){
        super(props);

        this.state={
            name:"",
            contact_number:"",
            email:"",
            pickup_location:"",
            drop_off_location:"",
            pickup_date:"",
            return_date:"",
            time:"",
            need_driver:"",
            

            nameError:'',
            contact_numberError:'',
            emailError:'',
            pickup_locationError:'',
            drop_off_locationError:'',
            pickup_dateError:'',
            return_dateError:'',
            timeError:'',
            need_driverError:'',
        };
    } 


    handleInputChange = (e) => {

      const {name,value} = e.target;
      
      this.setState({
          ...this.state,
          [name]:value
      })

    }

    onSubmit = (e) =>{

      e.preventDefault();
      this.validation();

      if (this.state.name && this.state.contact_number && this.state.drop_off_location && this.state.pickup_date && this.state.return_date && this.state.time && this.state.name && this.state.need_driver && this.state.email){
      
        const{name,contact_number,email,pickup_location,drop_off_location,pickup_date,return_date,time,need_driver} = this.state;
  
        const data ={
            name:name,
            contact_number:contact_number,
            email:email,
            pickup_location:pickup_location,
            drop_off_location:drop_off_location,
            pickup_date:pickup_date,
            return_date:return_date,
            time:time,
            need_driver:need_driver,
        }
        
        console.log(data)

        axios.post("http://localhost:8070/vbooking/save",data).then((res)=>{
            alert("vehicle booking added");
            if(res.data.success){
                this.setState({
                    name:"",
                    contact_number:"",
                    email:"",
                    pickup_location:"",
                    drop_off_location:"",
                    pickup_date:"",
                    return_date:"",
                    time:"",
                    need_driver:"",
                });              
            }
            e.preventDefault();
        });

        }
    }


    validation = () => {
      let nameError="";
      let contact_numberError="";
      let emailError="";
      let pickup_locationError="";
      let drop_off_locationError="";
      let pickup_dateError="";
      let return_dateError="";
      let timeError="";
      let need_driverError="";
 
      if(!this.state.name.includes('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm','n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M','N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z')){
        nameError="name must be characters!"
      }
      
      if(!this.state.contact_number.length > 10){
        contact_numberError="invalid contact number!"
      }

      if(!this.state.name){
        nameError="name Required!"
      }

      if(!this.state.contact_number){
          contact_numberError="contact number Required!"
      }

      if(!this.state.email.includes('@')){
        emailError="invalid email !"
      }
      if(!this.state.email){
        emailError="email Required!"
      }
      
      if(!this.state.pickup_location){
        pickup_locationError="pickup location Required!"
      }
      if(!this.state.drop_off_location){
        drop_off_locationError="drop off location Required!"
      }
      if(!this.state.pickup_date){
        pickup_dateError="pickup date Required!"
      }
      if(!this.state.return_date){
        return_dateError="return date Required!"
      }
      if(!this.state.time){
        timeError="time Required!"
      }
      if(!this.state.need_driver){
        need_driverError="need driver Required!"
      }


      if ( nameError | contact_numberError | emailError | pickup_locationError | drop_off_locationError | pickup_dateError | return_dateError | timeError | need_driverError ) {

        this.setState({nameError , contact_numberError , emailError , pickup_locationError , drop_off_locationError , pickup_dateError , return_dateError , timeError , need_driverError });

        return false;

      } else {

        this.setState({nameError , contact_numberError , emailError , pickup_locationError , drop_off_locationError , pickup_dateError , return_dateError , timeError , need_driverError });

      }

      return true;

    }  


    render() {
      

        return (
          
            <div class="ffcontainer">
                <div class="title">Booking Details</div>
                <div class="content">
       
                <form >
                    <div class="user-details">
                    
                    <div class="input-box">
                        <span class="details">Your Name &nbsp; <span style={{color : "red"}}>{this.state.nameError}</span></span>
                        <input type="text" 
                        value={this.state.name} 
                        name="name" 
                        placeholder="Enter your name" 
                        onChange={this.handleInputChange} />
                    </div>

                    <div class="input-box">
                        <span class="details">Your Contact Number <br/> <span style={{color : "red"}}>{this.state.contact_numberError}</span></span>
                        <input type="number" value={this.state.contact_number} name="contact_number" placeholder="Enter Contact Number" 
                        onChange={this.handleInputChange}  />
                    </div>
                    
                    <div class="input-box">
                        <span class="details">Email &nbsp; <span style={{color : "red"}}>{this.state.emailError}</span></span>
                        <input type="email" value={this.state.email} name="email" placeholder="Enter your email" 
                        onChange={this.handleInputChange} />
                    </div>
                    
                    <div class="input-box">
                        <span class="details">Time &nbsp; <span style={{color : "red"}}>{this.state.timeError}</span></span>
                        <input type="time" value={this.state.time} name="time" placeholder="Enter your number" 
                        onChange={this.handleInputChange}/>
                    </div>
                    
                    <div class="input-box">
                        <span class="details">Pickup Location &nbsp; <span style={{color : "red"}}>{this.state.pickup_locationError}</span></span>
                        <input type="text" value={this.state.pickup_location} name="pickup_location" placeholder="Address...." 
                        onChange={this.handleInputChange}/>
                    </div>

                    <div class="input-box">
                        <span class="details">Drop off Location &nbsp; <span style={{color : "red"}}>{this.state.drop_off_locationError}</span></span>
                        <input type="text" value={this.state.drop_off_location} name="drop_off_location" placeholder="Address...." 
                        onChange={this.handleInputChange}/>
                    </div>
                    
                    <div class="input-box">
                        <span class="details">Pickup Date &nbsp; <span style={{color : "red"}}>{this.state.pickup_dateError}</span></span>
                        <input type="date" value={this.state.pickup_date} name="pickup_date" 
                        onChange={this.handleInputChange}/>
                    </div>

                    <div class="input-box">
                        <span class="details">Return Date &nbsp; <span style={{color : "red"}}>{this.state.return_dateError}</span></span>
                        <input type="date" value={this.state.return_date} name="return_date"  
                        onChange={this.handleInputChange}/>
                    </div>
                    
                    <div class="input-box">
                        <span class="details">Need Driver? &nbsp; <span style={{color : "red"}}>{this.state.need_driverError}</span></span>
                        <input type="text" value={this.state.need_driver} name="need_driver" placeholder="Yes / No" 
                        onChange={this.handleInputChange}/>
                    </div>

                    <div class="input-box">
                    <br/>
                    <tr>

                    <td>
                    <input className=" btn-success" type="submit" value="Submit" onClick={this.onSubmit} />
                    </td>   
                    
                    </tr>
                    </div>
                    </div>
                    
                </form>
                </div>
            </div>
            
        )
    }
}


