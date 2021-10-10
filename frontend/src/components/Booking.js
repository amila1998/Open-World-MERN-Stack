import React from 'react';
import '../App.css';
import axios from 'axios';
import swal from 'sweetalert';
import 'bootstrap/dist/css/bootstrap.min.css';

const initialState = {
    id: "",
    adventure_name: "",
    customer_name: "",
    contactnumber: "",
    email: "",
    numberofvisitors: "",
    Booking_Date: "",
    customer_nameError: "",
    contactnumberError: "",
    emailError: "",
    numberofvisitorsError: "",
    Booking_DateError: "",
    confirmButton: "Submit",
    Booking: [],
    adventure: [],
}

class Booking extends React.Component {

    constructor(props) {
        super(props);
        this.state = initialState;
    }
  
    
    componentDidMount() {
        const url = "http://localhost:8070/Booking"+this.props.match.params.id;
        axios.get(url)
        .then(response => this.setState({Booking:response['data']},{adventure:response['data']})
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
    
    onChange(id){
        const url = "http://localhost:8070/Booking/"+id;
        axios.get(url).then(response => this.setState({customer_name:response['data']['customer_name'], contactnumber:response['data']['contactnumber']  ,email:response['data']['email'],numberofvisitors:response['data']['numberofvisitors'],Booking_Date:response['data']['Booking_Date'],adventure_name:response['data']['adventure_name'],id:id}))
        this.setState({confirmButton:"EDIT"});
    }

    onClear(){
        this.setState(initialState);
        this.componentDidMount();
       }


    validation = () => {
        let customer_nameError="";
        let contactnumberError= "";
        let emailError= "";
        let numberofvisitorsError= "";
        let Booking_DateError= "";
        
       
        if(!this.state.customer_name){
            customer_nameError="Customer Name Required!"
        }
        if(!this.state.contactnumber){
            contactnumberError="Contact Number Required!"
        }
        if(!this.state.email){
            emailError="Email Required!"
        }
        if(!this.state.numberofvisitors){
            numberofvisitorsError="Number of visitors Required!"
        }
        if(!this.state.Booking_Date){
            Booking_DateError="Booking Date Required!"
        }
        

        if(customer_nameError | contactnumberError | emailError | numberofvisitorsError | Booking_DateError ){
            
            this.setState({ customer_nameError , contactnumberError , emailError , numberofvisitorsError , Booking_DateError   });
            
            return false;

        }else{

            this.setState({ customer_nameError , contactnumberError , emailError ,numberofvisitorsError ,Booking_DateError });
        
        }

        return true;
    }

    SubmitForm = async(e) => {
        e.preventDefault();
        this.validation();
        if(this.state.customer_name && this.state.contactnumber && this.state.email  && this.state.numberofvisitors  && this.state.Booking_Date){
            console.log(this.state);
            const url = 'http://localhost:8070/Booking';
            if(!this.state.id){
                var data = JSON.stringify({ customer_name: this.state.customer_name , contactnumber: this.state.contactnumber , email: this.state.email , numberofvisitors: this.state.numberofvisitors ,  Booking_Date: this.state.Booking_Date    });
                console.log(data);
                await axios.post(url,data,{
                    headers: {'Content-Type': 'application/json'}
                })
                .then(res => {
                    console.log(res.data);
                    this.setState(initialState)
                    this.componentDidMount()
                    swal("Success!", "Add Successful!", "success")
                })
            }else{
                var datas = JSON.stringify({ customer_name: this.state.customer_name , contactnumber: this.state.contactnumber , email: this.state.email , numberofvisitors: this.state.numberofvisitors ,  Booking_Date: this.state.Booking_Date });
                console.log(datas);
                await axios.put(url+"/"+this.state.id,datas,{
                    headers: {'Content-Type': 'application/json'}
                })
                .then(res => {
                    console.log(res.data);
                    this.setState(initialState)
                    this.componentDidMount()
                    swal("Success!", "Edit Successful!", "success")
                })
            }
        }
    }
    
    onDelete(id){
        swal({
            title: "Are you sure?",
            text: "Delete this record!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                const url = 'http://localhost:8070/Booking/';
                axios.delete(url+id)
                .then(res =>{
                    swal("Delete Successful!", {
                        icon: "success",
                    })
                    this.componentDidMount()
                    
                });
            }
          })
    }
   
    render (){
        
        const { Booking } = this.state;
        const { adventure } = this.state;
        return (
            <div class="container">
            <br/><br/>
            <div class="justify-content-center">
                    <h2>Adventure Activities Booking</h2>
                    <hr/>
                    <div class="x_scroll">
                   
                  
                    

                        <form autoComplete="off" onSubmit={this.SubmitForm}>
                   
                        
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label text-md-right font-weight-bold">Customer Name</label>
                            <div class="col-md-6">
                                <input type="text" class="form-control" name="customer_name" value={this.state.customer_name} onChange={this.handleChange} />
                                <div style={{color : "red"}}>{this.state.customer_nameError}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label text-md-right font-weight-bold">Contact Number</label>
                            <div class="col-md-6">
                                <input type="text" class="form-control" name="contactnumber" value={this.state.contactnumber} onChange={this.handleChange} />
                                <div style={{color : "red"}}>{this.state.contactnumberError}</div>
                            </div>
                        </div>
                        <br/>
                      
                        
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label text-md-right font-weight-bold">Email</label>
                            <div class="col-md-6">
                                <input type="text" class="form-control" name="email" value={this.state.email} onChange={this.handleChange} />
                                <div style={{color : "red"}}>{this.state.emailError}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label text-md-right font-weight-bold">Number of Visitors</label>
                            <div class="col-md-6">
                                <input type="Number" class="form-control" name="numberofvisitors" value={this.state.numberofvisitors} onChange={this.handleChange} />
                                <div style={{color : "red"}}>{this.state.numberofvisitorsError}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label text-md-right font-weight-bold">Booking Date</label>
                            <div class="col-md-6">
                                <input type="date" class="form-control" name="Booking_Date" value={this.state.Booking_Date} onChange={this.handleChange} />
                                <div style={{color : "red"}}>{this.state.Booking_DateError}</div>
                            </div>
                        </div>
                        <br/>
                       
                        <div class="col-md-4 offset-md-4">
                            <input type="submit" class="btn btn-outline-primary" value={this.state.confirmButton} />
                            <input type="button" class="btn btn-outline-danger" value="Clear" onClick={() => this.onClear()} />
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Booking;
