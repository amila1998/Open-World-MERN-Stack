import React, { Component } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player'
import Map_cus from './Map_cus';
import "../dest.css"


export default class DestinationDetails extends Component {
    constructor(props){
        super(props);

        this.state={
            destination:{}
        };
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        axios.get(`http://localhost:8070/destination/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    destination:res.data.destination
                });
                console.log(this.state.destination);
            }
        });
    }

    render() {   
        const {title,description,description1,url,url1,image1}=this.state.destination;
        
        return (            
            <div>
                <a href={url}>
                    <center><img className="destination-medium" id="Details-Image" src={ "http://localhost:8070/" + image1 } alt="gjgjgj" /></center><br/>
                </a>
            

            <div className="container" style={{marginTop:'20px'}}> 
               <center><h2><b>{title}</b></h2></center>
            <hr/>
            <table >
                    <tr>
                        <th>
                        <div className="des_details">
                                <dl className="row">
                                    
                                    <dd className="col-sm9" id ="descr"><i>{description}</i></dd>
                                    
                                    
                                    
                                    <dd className="col-sm9" id ="descr"><br/><br/><i>{description1}</i></dd>
                                    <hr/>                

                                    <a className="btn btn-dark" href="/Map_cus" >
                                    <i class="fa fa-map-marker" aria-hidden="true" id="detailsbtn"></i>&nbsp;<h3>View Destination
                                    </a>                
                                </dl>
                        </div> 
                        </th>
                        
                        

                    </tr>
            </table>



<table>
    <tr>
        <th>
        <Map_cus/>
        </th>
        <div className="vl"></div>
        <th>
        <div className="visit">
            <tr >
            
                <div >
                    <h3><i>Plan_Your_Visit</i></h3>
                </div>
            </tr>
                <ul>
                <li><tr><td><h5><i><a href="#">Hotel</a></i></h5></td></tr></li>
                <li><tr><td><h5><i><a href="#">Vehicle</a></i></h5></td></tr></li>
                <li><tr><td><h5><i><a href="#">Tour Guides</a></i></h5></td></tr></li>
                <li><tr><td><h5><i><a href="#">Event</a></i></h5></td></tr></li>
                <li><tr><td><h5><i><a href="#">Ayurwedic</a></i></h5></td></tr></li>
                <li><tr><td><h5><i><a href="#">Events</a></i></h5></td></tr></li>
                </ul>
        </div>
        </th>
    </tr>
</table>

            




                <center> 
                                <div className='wrapper'> 
                                <div className='youtube-box'></div>
                                <ReactPlayer className='video' url={url1} controls />
                                </div>             
                </center>

                <center>    
                        <img src="../image/v4.gif" alt="name" class="d-block w-100" id="Destination-add"/>
                </center>  


            </div>

        
            </div>
            
        )
    }
}
