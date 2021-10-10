import React, { Component } from 'react';
import axios from 'axios';
import '../styles/vehicleDetails.css';
import '../styles/RV_booking.css';
import '../styles/dest.css';

export default class CreateVehicle extends Component {

    constructor(props){
        super(props);

        this.state={
            is_booked:"",
            name:"",
            brand:"",
            price_per_day:"",
            image1:"",
            image2:"",
            image3:"",
            image4:"",
            image5:"",
            year:"",
            category:"",
            seat_capacity:"",
            description:"",
            contact_number:"",

            is_bookedError:'',
            nameError:'',
            brandError:'',
            price_per_dayError:'',
            image1Error:'',
            image2Error:'',
            image3Error:'',
            image4Error:'',
            image5Error:'',
            yearError:'',
            categoryError:'',
            seat_capacityError:'',
            descriptionError:'',
            contact_numberError:'',
        };
    }

    handleInputChange = (e) =>{
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })

    }

    onSubmit = (e) =>{
        e.preventDefault();
        this.validation();

        if(this.state.name && this.state.brand && this.state.price_per_day  && this.state.image1  && this.state.image2 && this.state.image3 && this.state.image4 && this.state.image5 && this.state.year && this.state.category  && this.state.seat_capacity  && this.state.description && this.state.contact_number ){    

        const { is_booked,name,brand,price_per_day,image1,image2,image3,image4, image5,year,category,seat_capacity,description,contact_number}=this.state;

        const data ={
            is_booked:is_booked,
            name:name,
            brand:brand,
            price_per_day:price_per_day,
            image1:image1,
            image2:image2,
            image3:image3,
            image4:image4,
            image5:image5,
            year:year,
            category:category,
            seat_capacity:seat_capacity,
            description:description,
            contact_number:contact_number
        }

       
            
            console.log(data);
            

            axios.post("http://localhost:8070/vehicle/save",data).then((res)=>{
                alert("vehicle create successfully");
                if(res.data.success){
                    this.setState({
                        is_booked:"",
                        name:"",
                        brand:"",
                        price_per_day:"",
                        image1:"",
                        image2:"",
                        image3:"",
                        image4:"",
                        image5:"",
                        year:"",
                        category:"",
                        seat_capacity:"",
                        description:"",
                        contact_number:"",
                    });
                    
                }
            });
        }

    }

    onChangeImage1=event=>{
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
        }, () => {
            const data = new FormData() 
            data.append('file', this.state.selectedFile)
            axios.post("http://localhost:8070/vehicle/upload", data, { 
            }).then(res => { 
                this.setState({image1:res.data.filename})
            })
        })
    }

    onChangeImage2=event=>{
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
        }, () => {
            const data = new FormData() 
            data.append('file', this.state.selectedFile)
            axios.post("http://localhost:8070/vehicle/upload", data, { 
            }).then(res => { 
                this.setState({image2:res.data.filename})
            })
        })
    }
    
    onChangeImage3=event=>{
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
        }, () => {
            const data = new FormData() 
            data.append('file', this.state.selectedFile)
            axios.post("http://localhost:8070/vehicle/upload", data, { 
            }).then(res => { 
                this.setState({image3:res.data.filename})
            })
        })
    }
    
    onChangeImage4=event=>{
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
        }, () => {
            const data = new FormData() 
            data.append('file', this.state.selectedFile)
            axios.post("http://localhost:8070/vehicle/upload", data, { 
            }).then(res => { 
                this.setState({image4:res.data.filename})
            })
        })
    }

    onChangeImage5=event=>{
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
        }, () => {
            const data = new FormData() 
            data.append('file', this.state.selectedFile)
            axios.post("http://localhost:8070/vehicle/upload", data, { 
            }).then(res => { 
                this.setState({image5:res.data.filename})
            })
        })
    }    

    validation = () => {
        
        let is_bookedError="";
        let nameError="";
        let brandError="";
        let price_per_dayError="";
        let image1Error="";
        let image2Error="";
        let image3Error="";
        let image4Error="";
        let image5Error="";
        let yearError="";
        let categoryError="";
        let seat_capacityError="";
        let descriptionError="";
        let contact_numberError="";
        
        

        if(!this.state.name){
            nameError="Name Required!"
        }

        if(!this.state.brand){
            brandError="Brand name Required!"

        }

        if(!this.state.price_per_day){
            price_per_dayError="price per day Required!"
        }

        if(!this.state.image1.includes('jpg','jpeg','png')){
            image1Error="invalid fill type"
        }

        if(!this.state.image1){
            image1Error="Image 1 Required!"
        }

        if(!this.state.image2.includes('jpg','jpeg','png')){
            image2Error="invalid fill type"
        }
        

        if(!this.state.image2){
            image2Error="Image 2 Required!"

        }

        if(!this.state.image3.includes('jpg','jpeg','png')){
            image3Error="invalid fill type"
        }

        if(!this.state.image3 ){
            image3Error="Image 3 Required!"

        }

        if(!this.state.image4.includes('jpg','jpeg','png')){
            image4Error="invalid fill type"
        }

        if(!this.state.image4){
            image4Error="Image 4 Required!"

        }

        if(!this.state.image5.includes('jpg','jpeg','png')){
            image5Error="invalid fill type"
        }

        if(!this.state.image5){
            image5Error="Image 5 Required!"
        }

        if(!this.state.year){
            yearError="year Required!"
        }

        if(!this.state.category){
            categoryError="category Required!"

        }


        if(!this.state.seat_capacity){
            seat_capacityError="seat capacity Required!"
        }

        if(!this.state.description){
            descriptionError="description Required!"
        }

        if(!this.state.contact_number.length > 10){
            contact_numberError="invalid contact number!"
        }

        if(!this.state.contact_number){
            contact_numberError="contact number Required!"
        }

        if(nameError | brandError | price_per_dayError | image1Error | image2Error | image3Error | image4Error | image5Error | yearError | categoryError | seat_capacityError | descriptionError | contact_numberError ){

            this.setState({ nameError , brandError , price_per_dayError , image1Error , image2Error , image3Error , image4Error , image5Error , yearError , categoryError , seat_capacityError , descriptionError , contact_numberError });

            return false;
        }else{

            this.setState({ nameError , brandError , price_per_dayError , image1Error , image2Error , image3Error , image4Error , image5Error , yearError , categoryError , seat_capacityError , descriptionError , contact_numberError });

        }
        return true;

    }




    render() {
        return (
            <div className="container">
            <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal">Create new vehicle</h1>

                    <form className="form-group" noValidate>

                        <div className="bla">

                            <div className="form-group" style={{marginBottom:'15px'}}>
                                <label style={{marginBottom:'5px'}}>is booked?</label>
                                <br/>
                                <input type="text"
                                className="formcontrol"
                                name="is_booked"
                                placeholder="is booked type 'BOOKED', else keep empty"
                                value={this.state.is_booked}
                                onChange={this.handleInputChange} />
                                <div style={{color : "red"}}>{this.state.is_bookedError}</div>
                            </div>

                            <div className="form-group" style={{marginBottom:'15px'}}>
                                <label style={{marginBottom:'5px'}}>name</label>
                                <br/>
                                <input type="text"
                                className="formcontrol"
                                name="name"
                                placeholder="Enter Vehicle name"
                                value={this.state.name}
                                onChange={this.handleInputChange} />
                                <div style={{color : "red"}}>{this.state.nameError}</div>
                            </div>

                            <div className="form-group" style={{marginBottom:'15px'}}>
                                <label style={{marginBottom:'5px'}}>brand</label>
                                <br/>
                                <input type="text"
                                className="formcontrol"
                                name="brand"
                                placeholder="Enter Vehicle brand"
                                value={this.state.brand}
                                onChange={this.handleInputChange} />
                                <div style={{color : "red"}}>{this.state.brandError}</div>
                            </div>
                        </div>
                        <div className="bla">
                            <div className="form-group" style={{marginBottom:'15px'}}>
                                <label style={{marginBottom:'5px'}}>price per day</label>
                                <br/>
                                <input type="number"
                                className="formcontrol"
                                name="price_per_day"
                                placeholder="Enter price per day"
                                value={this.state.price_per_day}
                                onChange={this.handleInputChange} />
                                <div style={{color : "red"}}>{this.state.price_per_dayError}</div>
                            </div>

                            <div className="form-group" style={{marginBottom:'15px'}}>
                                <label style={{marginBottom:'5px'}}>year</label>
                                <br/>
                                <input type="number"
                                className="formcontrol"
                                name="year"
                                placeholder="Enter year"
                                value={this.state.year}
                                onChange={this.handleInputChange} />
                                <div style={{color : "red"}}>{this.state.yearError}</div>
                            </div>
                        </div>
                        <div className="bla">
                            <div className="form-group" style={{marginBottom:'15px'}}>
                                <label style={{marginBottom:'5px'}}>image1</label>
                                <br/>
                                <input type="file"
                                className="formcontrol"
                                name="image1"
                                onChange={this.onChangeImage1} />
                                <div style={{color : "red"}}>{this.state.image1Error}</div>
                            </div>

                            <div className="form-group" style={{marginBottom:'15px'}}>
                                <label style={{marginBottom:'5px'}}>image2</label>
                                <br/>
                                <input type="file"
                                className="formcontrol"
                                name="image2"
                                onChange={this.onChangeImage2} />
                                <div style={{color : "red"}}>{this.state.image2Error}</div>
                            </div>
                        </div>
                        <div className="bla">
                            <div className="form-group" style={{marginBottom:'15px'}}>
                                <label style={{marginBottom:'5px'}}>image3</label>
                                <br/>
                                <input type="file"
                                className="formcontrol"
                                name="image3"
                                onChange={this.onChangeImage3} />
                                <div style={{color : "red"}}>{this.state.image3Error}</div>
                            </div>

                            <div className="form-group" style={{marginBottom:'15px'}}>
                                <label style={{marginBottom:'5px'}}>image4</label>
                                <br/>
                                <input type="file"
                                className="formcontrol"
                                name="image4"
                                onChange={this.onChangeImage4} />
                                <div style={{color : "red"}}>{this.state.image4Error}</div>
                            </div>
                        </div>
                        <div className="bla">
                            <div className="form-group" style={{marginBottom:'15px'}}>
                                <label style={{marginBottom:'5px'}}>image5</label>
                                <br/>
                                <input type="file"
                                className="formcontrol"
                                name="image5"
                                onChange={this.onChangeImage5} />
                                <div style={{color : "red"}}>{this.state.image5Error}</div>
                            </div>
                        </div>
                        <div className="bla">
                            <div className="form-group" style={{marginBottom:'15px'}}>
                                <label style={{marginBottom:'5px'}}>category</label>
                                <br/>
                                <input type="text"
                                className="formcontrol"
                                name="category"
                                placeholder="Enter category"
                                value={this.state.category}
                                onChange={this.handleInputChange} />
                                <div style={{color : "red"}}>{this.state.categoryError}</div>
                            </div>

                            <div className="form-group" style={{marginBottom:'15px'}}>
                                <label style={{marginBottom:'5px'}}>seat capacity</label>
                                <br/>
                                <input type="number"
                                className="formcontrol"
                                name="seat_capacity"
                                placeholder="Enter seat capacity"
                                value={this.state.seat_capacity}
                                onChange={this.handleInputChange} />
                                <div style={{color : "red"}}>{this.state.seat_capacityError}</div>
                            </div>
                        </div>
                        <div className="bla">
                            <div className="form-group" style={{marginBottom:'15px'}}>
                                <label style={{marginBottom:'5px'}}>description</label>
                                <br/>
                                <textarea
                                className="formcontrol"
                                name="description"
                                placeholder="Enter description"
                                value={this.state.description}
                                onChange={this.handleInputChange} />
                                <div style={{color : "red"}}>{this.state.descriptionError}</div>
                            </div>

                            <div className="form-group" style={{marginBottom:'15px'}}>
                                <label style={{marginBottom:'5px'}}>contact number</label>
                                <br/>
                                <input type="number"
                                className="formcontrol"
                                name="contact_number"
                                placeholder="Enter contact number"
                                value={this.state.contact_number}
                                onChange={this.handleInputChange} />
                                <div style={{color : "red"}}>{this.state.contact_numberError}</div>
                            </div>
                        </div>
                        <button className=" btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                            
                            &nbsp; save
                        </button>

                    </form>
            </div>
            </div>
        )
    }
}
