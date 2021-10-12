import axios from 'axios';
import React, { Component } from 'react';
import '../styles/vehicleDetails.css';
import '../styles/RV_booking.css';

export default class VehicleHomeScreen extends Component {

    constructor(props){
        super(props);
        this.state={
            vehicles:[]
        };
    }

    componentDidMount(){
        this.retrieveVehicles();
    }

    retrieveVehicles(){
        axios.get("http://localhost:8070/vehicles").then(res=>{
            if(res.data.success){
                this.setState({
                    vehicles:res.data.existingVehicles
                });
                console.log(this.state.vehicles)
            }
        });
    }   

    onDelete = (id) =>{
        axios.delete(`http://localhost:8070/vehicle/delete/${id}`).then((res)=>{
            alert("Delete successfully");
            this.retrieveVehicles();
        });
    }

    filterData(vehicles,searchkey){
        const result = vehicles.filter((vehicle) =>
        vehicle.name.toLowerCase().includes(searchkey) || 
        vehicle.brand.toLowerCase().includes(searchkey)
        )
    
        this.setState({vehicles:result})
    }

    filterData1(vehicles,searchkey){
        const result = vehicles.filter((vehicle) =>
        vehicle.category.toLowerCase().includes(searchkey)
        )
    
        this.setState({vehicles:result})
    }

    handleSearchArea = (e) =>{
        const searchkey = e.currentTarget.value;
        axios.get("http://localhost:8070/vehicles").then(res=>{
            if(res.data.success){
               this.filterData(res.data.existingVehicles,searchkey) 
            }
        });
    }

    handleSearchArea1 = (e) =>{
        const searchkey = e.currentTarget.value;
        axios.get("http://localhost:8070/vehicles").then(res=>{
            if(res.data.success){
               this.filterData1(res.data.existingVehicles,searchkey) 
            }
        });
    }

    render() {
        return (
            <div >
                <table>
                <tr>
                <th>
                <center>
                <div>
                    <input
                    id="search"
                    type="search"
                    placeholder="search by name"
                    name="searchQuery"
                    onChange={this.handleSearchArea}/>
                </div>
                </center>
                </th>
                <th>
                <div>
                    <input
                    id="search2"
                    type="search"
                    placeholder="search by category"
                    name="searchQuery"
                    onChange={this.handleSearchArea1}/>
                </div>
                </th>
                </tr>
                </table>
                <br/>   
                <div className="row">
                    <div className="row center">
                            
                                {this.state.vehicles.map((vehicles,index)=>(
                                    <div id="q2" className="vehiclecard">
                                        <div class="cont">
                                        <center>
                                        <a href={`/VehicleScreen/${vehicles._id}`} >
                                            <img className="medium" src={ "http://localhost:8070/" + vehicles.image1 } alt={vehicles.name}/>           
                                        </a></center>
                                        
                                        <div class="text-block">
                                        <h4 id="bbb" class="text-danger">{vehicles.is_booked}</h4>
                                        </div>
                                        
                                        </div>
                                        <div className="vehiclecardbody">
                                            <a href={`/VehicleScreen/${vehicles._id}`}>
                                                <h2 className="headname">{vehicles.name}</h2>
                                            </a>
                                            <div className="price">
                                            Rs{vehicles.price_per_day}(per day)
                                            </div>
                                            
                                        </div>
                                    </div>
                                ))}                                 
                    </div>           
                </div>   
           </div>
        )
    }
}