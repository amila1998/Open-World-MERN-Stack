import React, { Component } from 'react';
import axios from 'axios';
import '../vehicleDetails.css';
import '../RV_booking.css';


export default class vbookings extends Component {

    constructor(props){
        super(props);
        this.state={
            vbookings:[],
        };
    }
    
    componentDidMount(){
        this.retrieveVbookings();
    }
    
    retrieveVbookings(){
        axios.get("http://localhost:8070/vbookings").then(res=>{
            if(res.data.success){
                this.setState({
                    vbookings:res.data.existingVbookings
                });
                console.log(this.state.vbookings);
            }
        });
    }   



    onDelete = (id) =>{
        axios.delete(`http://localhost:8070/vbooking/delete/${id}`).then((res)=>{
           alert("Delete successfully");
            this.retrieveVbookings();
        });
    }

    render() {
        return (
            <div className="container">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope='col'>#</th>
                            <th scope='col'>name</th>
                            <th scope='col'>contact number</th>
                            <th scope='col'>email</th>
                            <th scope='col'>time</th>
                            <th scope='col'>pickup_location</th>
                            <th scope='col'>Dropofflocation</th>
                            <th scope='col'>pickupdate</th>
                            <th scope='col'>returndate</th>
                            <th scope='col'>need_driver</th>
                            <th scope='col'>action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.vbookings.map((vbookings,index)=>(
                      <tr key={index}>
                          <th scope='row'>{index+1}</th>
                          <td>{vbookings.name}</td>
                          <td>{vbookings.contact_number}</td>
                          <td>{vbookings.email}</td>
                          <td>{vbookings.time}</td>
                          <td>{vbookings.pickup_location}</td>
                          <td>{vbookings.drop_off_location}</td>
                          <td>{vbookings.pickup_date}</td>
                          <td>{vbookings.return_date}</td>
                          <td>{vbookings.need_driver}</td>
                          <td>
                          
                          <button class="red" ><a  href="#" onClick={() =>this.onDelete(vbookings._id)} >
                                    <i className="far fa-trash-alt"></i>&nbsp;Reject
                            </a></button>
                          </td>
                      </tr>  
                    ))}
                    </tbody>
                </table>

                







            </div>
        )
    }
}

