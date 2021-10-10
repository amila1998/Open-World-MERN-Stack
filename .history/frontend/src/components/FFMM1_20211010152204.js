import React, { Component } from 'react';
import axios from 'axios';
import "../dest.css"



export default class FFMM1 extends Component {
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
    axios.get("http://localhost:8070/destinations").then(res=>{
        if(res.data.success){
            this.setState({
                destinations:res.data.existingDestinations
            });
            console.log(this.state.destinations)   
        }
    });
}


onDelete = (id) =>{
    axios.delete(`http://localhost:8070/destination/delete/${id}`).then((res)=>{
        alert("Delete successfully");
        this.retrieveDestinations();
    });
}


filterData(destinations,searchkey){
    const result = destinations.filter((destination) =>
        destination.title.toLowerCase().includes(searchkey) || 
        destination.description.toLowerCase().includes(searchkey) || 
        destination.description1.toLowerCase().includes(searchkey)
    )

    this.setState({destinations:result})
}


handleSearchArea = (e) =>{
    const searchkey = e.currentTarget.value;
    axios.get("http://localhost:8070/destinations").then(res=>{
        if(res.data.success){
            this.filterData(res.data.existingDestinations,searchkey)
        }
    });
}


render() {
    return (
        <div className="container">  

            <br/><center><h3><b>All Destinations</b></h3></center>
            
            <center><div className="col-lg-3 mt-2 mb-2" >
                    <input
                    className="form-control"
                    type="search"
                    placeholder="search"
                    name="searchQuery"
                    onChange={this.handleSearchArea}/>
            </div></center>
            


            <div>
                <button className="btn btn-success">
                    <i class="fa fa-plus" aria-hidden="true"></i>&nbsp;&nbsp;
                    <a href="/addDestination" style={{textDecoration:'none', color:'white'}}>Create New Destination</a>                
                </button>
            </div>


            <br/>
            <hr/>

            
            <table className="table" id="table1" style={{marginBottom:'40px'}}>
                    <thead>
                        <tr>
                            <th scope="col"><b>ID</b></th>
                            <th scope="col"><b>Title</b></th>
                            <th scope="col"><b>Description</b></th>                            
                            <th scope="col"><b>Description1</b></th>
                            <th scope="col"><b>Destination URL</b></th>
                            <th scope="col"><b>Video URL</b></th>                            
                            <th scope="col"><b>Image</b></th>
                            <th scope="col"><b>Action</b></th>
                            
                        </tr>
                    </thead>

                    
                    <tbody>
                        {this.state.destinations.map((destinations,index)=>(
                            <tr key={index}>
                            <th scope="row">{index+1}</th>
                            <td>
                                <a href={`/Destination/${destinations._id}`} style={{textDecoration:'none'}}>
                                {destinations.title}
                                </a>
                            </td>
                            <td>{destinations.description}</td>
                            <td>{destinations.description1}</td>
                            <td><a href={destinations.url} >{destinations.url}</a></td>
                            <td><a href={destinations.url1} >{destinations.url1}</a></td>                            
                            <td>
                            <div class="dropdown">
                                <img src={ "http://localhost:8070/" + destinations.image1 } alt={destinations.name} width="40" height="50"/>                                
                            </div>
                            </td>
                            


                            <td>
                                <a className="btn btn-warning" href={`/editDestination/${destinations._id}`}>
                                    <i className="fas fa-edit"></i>&nbsp;Edit
                                </a>
                                &nbsp;
                                &nbsp;
                                &nbsp;
                                <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(destinations._id)}>
                                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                                </a>
                            </td>
                        </tr>
                        ))}

                    </tbody>
                    
                </table> 
                        
        </div>
    )
}
}