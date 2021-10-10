import axios from 'axios';
import React, { Component } from 'react';
import '../styles/vehicleDetails.css';
import '../styles/RV_booking.css';

export default class Vehicle extends Component {

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
        vehicle.brand.toLowerCase().includes(searchkey) ||
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

    render() {
        return (
            <div id="container">
                <table>
                <tr>
                <th>
                <div>
                    <input
                    className="formcontrol"
                    id="search1"
                    type="search"
                    placeholder="search"
                    name="searchQuery"
                    onChange={this.handleSearchArea}/>
                </div>
                </th>
                <th>
                <button className="btn-success" id="but">
                    <a href="/CreateVehicle" style={{textDecoration:'none', color:'white'}}>Create New Vehicle</a>
                </button>
                </th>
                </tr>
                </table>
                <br/>
                <div id="tainer">
                <table className="table" style={{marginBottom:'40px'}}>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">booked</th>
                            <th scope="col">name</th>
                            <th scope="col">brand</th>
                            <th scope="col">price_per_day</th>
                            <th scope="col">image1</th>
                            <th scope="col">image2</th>
                            <th scope="col">image3</th>
                            <th scope="col">image4</th>
                            <th scope="col">image5</th>
                            <th scope="col">year</th>
                            <th scope="col">category</th>
                            <th scope="col">seat_capacity</th>
                            <th scope="col">description</th>
                            <th scope="col">contact_number</th>
                            <th scope="col">Action</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.vehicles.map((vehicles,index)=>(
                        <tr key={index}>
                            <th scope="row">{index+1}</th>
                            <td>{vehicles.is_booked}</td>
                            <td>
                                <a href={`/VehicleScreen/${vehicles._id}`} style={{textDecoration:'none'}}>
                                {vehicles.name}
                                </a>
                            </td>
                            <td>{vehicles.brand}</td>
                            <td>Rs{vehicles.price_per_day}</td>
                            <td>
                            <div class="dropdown">
                                <img src={ "http://localhost:8070/" + vehicles.image1 } alt={vehicles.name} width="40" height="50"/>
                                <div class="dropdown-content">
                                <img src={ "http://localhost:8070/" + vehicles.image1 } alt={vehicles.name} width="300" height="200"/>
                                </div>
                            </div>
                            </td>
                            <td>
                            <div class="dropdown">
                                <img src={ "http://localhost:8070/" + vehicles.image2 } alt={vehicles.name} width="40" height="50"/>
                                <div class="dropdown-content">
                                <img src={ "http://localhost:8070/" + vehicles.image2 } alt={vehicles.name} width="300" height="200"/>
                                </div>
                            </div>
                            </td>
                            <td>
                            <div class="dropdown">
                                <img src={ "http://localhost:8070/" + vehicles.image3} alt={vehicles.name} width="40" height="50"/>
                                <div class="dropdown-content">
                                <img src={ "http://localhost:8070/" + vehicles.image3} alt={vehicles.name} width="300" height="200"/>
                                </div>
                            </div>
                            </td>
                            <td>
                            <div class="dropdown">
                                <img src={ "http://localhost:8070/" + vehicles.image4} alt={vehicles.name} width="40" height="50"/>
                                <div class="dropdown-content">
                                <img src={ "http://localhost:8070/" + vehicles.image4} alt={vehicles.name} width="300" height="200"/>
                                </div>
                            </div>
                            </td>
                            <td>
                            <div class="dropdown">
                                <img src={ "http://localhost:8070/" + vehicles.image5} alt={vehicles.name} width="40" height="50"/>
                                <div class="dropdown-content">
                                <img src={ "http://localhost:8070/" + vehicles.image5} alt={vehicles.name} width="300" height="200"/>
                                </div>
                            </div>
                            </td>
                            <td>{vehicles.year}</td>
                            <td>{vehicles.category}</td>
                            <td>{vehicles.seat_capacity}</td>
                            <td>{vehicles.description}</td>
                            <td>{vehicles.contact_number}</td>
                            <td>
                            <button class="blue" ><a  href={`/EditVehicle/${vehicles._id}`}>
                                    <i className="fas fa-edit"></i>&nbsp;Edit
                            </a></button>
                                &nbsp;
                            <button class="red" ><a  href="#" onClick={() =>this.onDelete(vehicles._id)}>
                                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                            </a></button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
                </div>
            </div>
        )
    }
}
