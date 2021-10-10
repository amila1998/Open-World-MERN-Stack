import React, { Component } from 'react';
import axios from 'axios';
import * as mdb from 'mdb-ui-kit'; // lib
import { Input } from 'mdb-ui-kit'; // module
import "../dest.css"



export default class DestinationHomeScreen extends Component {
constructor(props){
    super(props);
    this.state={
        destinations:[]
    };
}

componentDidMount(){
    this.retrieveDestinations();
}

retrieveDestinations(){
    axios.get("http://localhost:8800/destinations").then(res=>{
        if(res.data.success){
            this.setState({
                destinations:res.data.existingDestinations
            });
            console.log(this.state.destinations)   
        }
    });
}


onDelete = (id) =>{
    axios.delete(`http://localhost:8800/destination/delete/${id}`).then((res)=>{
        alert("Delete successfully");
        this.retrieveDestinations();
    });
}


filterData(destinations,searchkey){
    const result = destinations.filter((destination) =>
        destination.title.toLowerCase().includes(searchkey) 
    )

    this.setState({destinations:result})
}


handleSearchArea = (e) =>{
    const searchkey = e.currentTarget.value;
    axios.get("http://localhost:8800/destinations").then(res=>{
        if(res.data.success){
            this.filterData(res.data.existingDestinations,searchkey)
        }
    });
}


render() {
    return (
        <div className="container">     
            <br/><h5><p><b><center>All Destinations</center></b></p></h5>

            <div className="container">
                    <div
                    id="carouselBasicExample"
                    className="carousel slide carousel-fade"
                    data-mdb-ride="carousel"
                    >
                    
                    <div className="carousel-indicators">
                        <button
                        type="button"
                        data-mdb-target="#carouselBasicExample"
                        data-mdb-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                        ></button>
                        <button
                        type="button"
                        data-mdb-target="#carouselBasicExample"
                        data-mdb-slide-to="1"
                        aria-label="Slide 2"
                        ></button>
                        <button
                        type="button"
                        data-mdb-target="#carouselBasicExample"
                        data-mdb-slide-to="2"
                        aria-label="Slide 3"
                        ></button>
                    </div>

                    
                    <div className="carousel-inner">
                        
                        <div className="carousel-item active">
                        <img
                            src="../image/p4.jpg"
                            className="d-block w-100"
                            alt="..."
                        />
                        <div className="carousel-caption d-none d-md-block" >      

                        <div className="col-lg-3 mt-2 mb-2"  id="slide">
                                        <input
                                        className="form-control"
                                        type="search"
                                        placeholder="search"
                                        name="searchQuery"
                                        onChange={this.handleSearchArea}/>
                                </div>


                            <h1 id="openworld" >Open World</h1>

                            <p>
                            To change lives.
                            </p>
                        </div>
                        </div>

                    
                        <div className="carousel-item">
                        <img
                            src="../image/p6.jpg"
                            className="d-block w-100"
                            alt="..."
                        />
                        <div className="carousel-caption d-none d-md-block">   




                            
                        <div className="col-lg-3 mt-2 mb-2"  id="slide">
                                        <input
                                        className="form-control"
                                        type="search"
                                        placeholder="search"
                                        name="searchQuery"
                                        onChange={this.handleSearchArea}/>
                                </div>
                            <h1 id="openworld" >Open World</h1>                       

                            <p>
                            To change lives.
                            </p>
                        </div>
                        </div>

                        
                        <div className="carousel-item">
                        <img
                            src="../image/p3.jpg"
                            className="d-block w-100"
                            alt="..."
                        />
                        <div className="carousel-caption d-none d-md-block">

                        <div className="col-lg-3 mt-2 mb-2"  id="slide">
                                        <input
                                        className="form-control"
                                        type="search"
                                        placeholder="search"
                                        name="searchQuery"
                                        onChange={this.handleSearchArea}/>
                                </div>

                                <h1 id="openworld" >Open World</h1>

                            <p>
                            To change lives.
                            </p>
                        </div>
                        </div>
                    </div>
                    
                    
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-mdb-target="#carouselBasicExample"
                        data-mdb-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-mdb-target="#carouselBasicExample"
                        data-mdb-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                    </div>
                    </div>       

                          <div className="row">
                            <main>
                                <div className="row center">
                                    
                                      {this.state.destinations.map((destinations,index)=>(
                                        <div className="destination-card">
                                        <a href={`/Destination/${destinations._id}`}>
                                        
                                        <img className="destination-medium" src={ "http://localhost:8800/" + destinations.image1 } alt="gjgjgj"/>
                                        </a>
                                        <div className="destination-card-body">
                                            <a href={`/Destination/${destinations._id}`}>
                                                <h6><center>{destinations.title}</center></h6>
                                                <center><a href={`/Destination/${destinations._id}`} class="btn btn-primary">View</a></center>
                                            </a>
                                        </div>
                                    </div>                                            
                                    ))
                                }                           
                            </div>
                        </main>               
                    </div>     
        </div>
    )
}
}