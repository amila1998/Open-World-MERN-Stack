import React from 'react';
import '../App.css';
import swal from 'sweetalert';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Grid } from '@mui/material';

const initialState = {
    id: "",
    adventure_name: "",
    image1: "",
    image2: "",
    city: "",
    province: "",
    description: "",
    adventure_type: "",
    confirmButton: "Send",
    adventure: [],
}

class AdventureOne extends React.Component {

    constructor(props) {
        super(props);
        this.state = initialState;
    }

    componentDidMount = async() => {
        const url = "http://localhost:8070/adventure/"+this.props.match.params.id
        await axios.get(url)
        .then(response => 
            this.setState({adventure_name:response['data']['adventure_name'], city:response['data']['city']  ,image1:response['data']['image1'],image2:response['data']['image2'],province:response['data']['province'],description:response['data']['description'],adventure_type:response['data']['adventure_type']})
        )
    }

    handleChange = e => {
        const isCheckbox = e.target.type === "checkbox";
        this.setState({
            [e.target.name]: isCheckbox
                ? e.target.checked
                : e.target.value
        });
    }

    render (){
        const { adventure } = this.state;
        return (
            <div class="container">
            <br/><br/>
            <div class="justify-content-center">
                    <h2>Adventure</h2>
                    <hr/>

                        <div class="card">
                            <img class="img-thumbnail" src={ "http://localhost:8070/" + this.state.image1 } alt={ this.state.adventure_type }/>
                            <img class="img-thumbnail" src={ "http://localhost:8070/" + this.state.image2 } alt={ this.state.adventure_type }/>
                            <div class="card-body">
                                <h5 class="card-title"> { this.state.adventure_name }</h5>
                                <h3 class="card-title"> { this.state.city }</h3>
                                <p class="card-text">{ this.state.description }</p>
                                <a href={"/Booking/"+this.props.match.params.id } class="btn btn-primary">Buy Now</a>
                            </div>
                        </div>
                    
                </div>
            </div>
        );
    }
}

export default AdventureOne;
