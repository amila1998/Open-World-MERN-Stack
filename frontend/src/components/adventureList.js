import React from 'react';
import '../App.css';
import swal from 'sweetalert';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Grid } from '@mui/material';

const initialState = {
    id: "",
    confirmButton: "Send",
    search: "",
    adventure: [],
}

class AdventureList extends React.Component {

    constructor(props) {
        super(props);
        this.state = initialState;
    }

    componentDidMount() {
        const url = "http://localhost:8070/adventure";
        axios.get(url)
        .then(response => this.setState({adventure:response['data']})
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
                    <h2>Adventure Activities</h2>
                    <hr/>
                    <div className="col-lg-3 mt-2 mb-2" style={{marginTop:'40px', marginLeft:'50px', marginRight:'40px'}}>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label text-md-right font-weight-bold">Search</label>
                            <input type="text" class="form-control" name="search" value={this.state.search} onChange={this.handleChange} />
                        </div>
                    </div>
                    <hr/>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        adventure.filter((data)=>{
                            if(this.state.search == null)
                                return data
                            else if(data.adventure_name.toLowerCase().includes(this.state.search.toLowerCase()) || data.city.toLowerCase().includes(this.state.search.toLowerCase()) ){
                                return data
                            }
                        }).map((res) =>
                        
                        <Grid item xs={1} sm={3} md={3} >
                            <div class="card">
                                <img class="card-img-top" src={ "http://localhost:8070/" + res.image1 } alt={ res.adventure_type }/>
                                <div class="card-body">
                                    <h5 class="card-title">{ res.adventure_name }</h5>
                                    <h3 class="card-title">{ res.city }</h3>
                                    <a href={"one_adventures/" + res._id } class="btn btn-primary">Select</a>
                                </div>
                            </div>
                        </Grid>
                        )
                    }
                    </Grid>
                </div>
            </div>
        );
    }
}

export default AdventureList;
