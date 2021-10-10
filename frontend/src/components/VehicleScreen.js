import React, { Component } from 'react';
import axios from 'axios';
import CreateV_bookings from './CreateV_bookings';
import '../styles/vehicleDetails.css';
import '../styles/RV_booking.css';

export default class componentName extends Component {

    constructor(props){
        super(props);

        this.state={
            vehicle:{}
        };
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        axios.get(`http://localhost:8070/vehicle/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    vehicle:res.data.vehicle
                });
                console.log(this.state.vehicle);
            }
        });
    }



    render() {

        const {
            is_booked,
            name,
            brand,
            price_per_day,
            image1,
            image2,
            image3,
            image4,
            image5,
            year,
            category,
            seat_capacity,
            description,
            contact_number
        }=this.state.vehicle;

        return (
            <div className="container">
                
                <div id="VS-main">
                    <div id="RV-slider-booking">  

                        <div id="RV-slider">
                        <div class="div1">
                        <div class="container">
                        <ul class="list-group mb-3">
                        <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
                        </div>
                        <center>
                            
                        <div class="carousel-inner" >
                            <div class="carousel-item active" data-bs-interval="10000">
                            <img src={ "http://localhost:8070/" + image1 } alt={name} class="d-block w-100" id="bigimg" />
                                <div class="carousel-caption d-none d-md-block">
                            </div>
                            </div>
                            
                                <div class="carousel-item" data-bs-interval="2000">
                                <img src={ "http://localhost:8070/" + image2 } alt={name} class="d-block w-100" id="bigimg"/>
                                <div class="carousel-caption d-none d-md-block">  
                                </div>
                                
                            </div>
                                <div class="carousel-item">
                                <img src={ "http://localhost:8070/" + image3 } alt={name} class="d-block w-100" id="bigimg"/>
                                <div class="carousel-caption d-none d-md-block"> 
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src={ "http://localhost:8070/" + image4 } alt={name} class="d-block w-100" id="bigimg"/>
                                <div class="carousel-caption d-none d-md-block"> 
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src={ "http://localhost:8070/" + image5 } alt={name} class="d-block w-100" id="bigimg"/>
                                <div class="carousel-caption d-none d-md-block"> 
                                </div>
                            </div>
                            </div>
                                <button class="carousel-control-prev" id="arrow" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" id="arrow" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                                </button>
                                </center>
                        </div>
                        </ul>
                        </div>                  
                        </div>
                        </div>



                        <div id="RV-booking">

                        <div class="text-block22">
                            <h4 id="bbb7" class="text-danger">{is_booked}</h4>
                        </div>
                                    
                            <CreateV_bookings/>
                            
                        
                        <br/>
                        <img src="../add3.gif" alt={name} class="d-block w-100" id="add1"/>
                        

                        </div>
                    </div>

                    <div id="RV-details-add">


                        <div id="RV-details">
                        <center><img src="../add1.gif" alt={name} class="d-block w-100" id="add3"/></center>
                        <br/>
                        <ul class="list-group mb-3">
                        
                            <li class="list-group-item d-flex justify-content-between lh-condensed">
                                <div>
                                    <h6 id="h66" class="my-0">name</h6>
                                </div>
                                
                                <span id="h666" class="text-muted">{name}</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between lh-condensed">
                                <div>
                                    <h6 id="h66" class="my-0">brand</h6>
                                </div>
                                
                                <span id="h666" class="text-muted">{brand}</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between lh-condensed">
                                <div>
                                    <h6  id="h66" class="my-0">year</h6>
                                </div>
                                <span id="h666" class="text-muted">{year}</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between lh-condensed">
                                <div>
                                    <h6 id="h66" class="my-0">category</h6>
                                    
                                </div>
                                <span id="h666" class="text-muted">{category}</span>
                            </li>
                            
                            <li class="list-group-item d-flex justify-content-between lh-condensed">
                                <div>
                                    <h6 id="h66" class="my-0">seat capacity</h6>
                                    {/*
                                    <div class="text-block1">
                                        <h4 id="bbb" class="text-danger">{is_booked}</h4>
                                    </div>
                                    */}
                                </div>
                                <span id="h666" class="text-muted">{seat_capacity}</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between lh-condensed">
                                <div>
                                    <h6 id="h66" class="my-0">description:&nbsp;</h6>
                                </div>
                                <span id="h666" class="text-muted">{description}</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between bg-light">
                                <div class="text-success">
                                    <h6 id="h66" class="my-0">contact number</h6>
                                </div>
                                <span id="h666" class="text-success">{contact_number}</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between bg-light">
                                <div class="text-success">
                                    <h6 id="h66" class="my-0">price per day</h6>
                                </div>
                                <span id="h666" class="text-success">Rs{price_per_day}</span>
                            </li> 
                        </ul>
                        
                        </div>

                        <div id="RV-add">
                        <center>    
                        <img src="../add2.gif" alt={name} class="d-block w-100" id="add"/>
                        </center>
                        </div>
                        
                    </div>
                    
                </div>
                
                
            </div>
        )
    }
}

