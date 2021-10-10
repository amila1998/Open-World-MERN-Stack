import React from 'react';
import '../creditcard/creditcard.css';
import swal from  'sweetalert';
import axios from 'axios';

 


const initialState = {
    id: "",
    userid:"",    
    Hotelid: "",   
    vehicleid: "",    
    guideid: "",   
    outdoorid: "",    
    ayurvedicid: "",    
    paymentstates: "",    
    total: "", 
    approve: "",

    useridError:"", 
    HotelidError: "",   
     vehicleidError: "",  
       guideidError: "",   
        outdooridError: "",  
          ayurvedicidError: "", 
             paymentstatesError: "", 
                totalError: "",
                approveError: "",
    confirmButton: "Send",    selectedFile: "",    client: [],
}



class HotelRoomBookingpaymentList extends React.Component {


    constructor(props) {
        super(props);
        this.state = initialState; 
    }
    componentDidMount() {
        const url = "http://localhost:8070/paymentR";       
        axios.get(url)
        .then(response => this.setState({client:response['data']})
        )
    }

    handleChange  = e => {
        const isCheckbox = e.target.type === "checkbox";
        this.setState({
            [e.target.name]: isCheckbox
                ? e.target.checked
                : e.target.value
        });
    }
   




    onChange(id){
        const url = 'http://localhost:8070/paymentR/';
        axios.get(url+id)
        .then(response =>
        this.setState({userid:response['data']['userid'] , Hotelid:response['data']['Hotelid'] ,vehicleid:response['data']['vehicleid'] ,guideid:response['data']['guideid'] ,
        outdoorid:response['data']['outdoorid'] ,ayurvedicid:response['data']['ayurvedicid'],paymentstates:response['data']['paymentstates'],total:response['data']['total'],approve:response['data']['approve'],id:id}))
        this.setState({confirmButton:"EDIT"});
    }

    onClear(){
        this.setState(initialState);
        this.componentDidMount();
    }




    
    validation = () => {
       
        let useridError="";
        let HotelidError= "";
        let vehicleidError= "";
        let guideidError= "";
        let outdooridError= "";
        let ayurvedicidError= "";   
        let paymentstatesError= "";   
        let totalError= "";
        let approveError= "";
        
       
      
        if(!this.state.userid){
            useridError="USER name Required!"
        }
        if(!this.state.Hotelid){
            HotelidError="Bname Required!"
        }
        if(!this.state.vehicleid){
            vehicleidError="cardNumber Required!"
        }
        if(!this.state.guideid){
            guideidError="CVV Required!"
        }
        if(!this.state.outdoorid ){
            outdooridError="Expire date Required!"
        }
        if(!this.state.ayurvedicid ){
            ayurvedicidError="Expire date Required!"
        }
        if(!this.state.paymentstates ){
            paymentstatesError="Expire date Required!"
        }
        if(!this.state.total ){
            totalError="Expire date Required!"
        }
        if(!this.state.approve ){
            approveError="approve Required!"
        }

        if( useridError |  HotelidError |vehicleidError |guideidError | outdooridError |ayurvedicidError|paymentstatesError|totalError |approveError ){
            
             this.setState({  useridError ,  HotelidError ,vehicleidError ,guideidError , outdooridError,ayurvedicidError,paymentstatesError,totalError ,approveError });
            
            return false;

        }else{

             this.setState({useridError ,  HotelidError ,vehicleidError ,guideidError , outdooridError,ayurvedicidError,paymentstatesError,totalError ,approveError });
        
        }

        return true;
    }


    SubmitForm = async(e) => {
        e.preventDefault();
        this.validation();
        if( this.state.userid && this.state.Hotelid || this.state.vehicleid   ||  this.state.guideid || this.state.outdoorid || this.state.ayurvedicid  
             ||  this.state.total || this.state.approve ){
            console.log(this.state);
            const url = 'http://localhost:8070/paymentR';
            
            if(!this.state.id){
                var data = JSON.stringify({  userid: this.state.userid ,  Hotelid:this.state.Hotelid ,  vehicleid: this.state.vehicleid ,  guideid: this.state.guideid ,  outdoorid: this.state.outdoorid,
                     ayurvedicid: this.state.ayurvedicid,   paymentstates:this.state.paymentstates, total: this.state.total, approve: this.state.approve});
                console.log(data);
                await axios.post(url,data,{
                    headers: {'Content-Type': 'application/json'}
                })
                .then(res => {
                    console.log(res.data);
                    this.setState(initialState)
                    this.componentDidMount()
                    swal("success!", "We will contact you soon!", "success")
                })
           
            }else{
                var datas = JSON.stringify({  userid: this.state.userid ,  Hotelid:this.state.Hotelid ,  vehicleid: this.state.vehicleid ,  guideid: this.state.guideid ,  outdoorid: this.state.outdoorid, 
                    ayurvedicid: this.state.ayurvedicid, paymentstates:this.state.paymentstates, total: this.state.total, approve: this.state.approve,id:this.state.id});
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
                const url = "http://localhost:8070/paymentR/";
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
        const { client } = this.state;
        return (
            <div class="container">
            <br/><br/>
            <div class="justify-content-center">
 
            <div class="right1 pageBody"> 

   <h2>ADMIN VIEW BOOKING</h2>
                    <hr/>


   <div class="x_scroll"></div>
                    <br></br> 
                   
                    <form autoComplete="off" onSubmit={this.SubmitForm}>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label text-md-right font-weight-bold">userid</label>
                            <div class="col-md-6">
                                <input type="(text)" class="form-control" name="userid" value={this.state.userid} onChange={this.handleChange} />
                                <div style={{color : "red"}}>{this.state.useridError}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label text-md-right font-weight-bold">Hotel</label>
                            <div class="col-md-6">
                                <input type="text" class="form-control" name="Hotelid" value={this.state.Hotelid} onChange={this.handleChange} />
                                <div style={{color : "red"}}>{this.state.HotelidError}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label text-md-right font-weight-bold">vehicle</label>
                            <div class="col-md-6">
                                <input type="text" class="form-control" name="vehicleid" value={this.state.vehicleid} onChange={this.handleChange} />
                                <div style={{color : "red"}}>{this.state.vehicleidError}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label text-md-right font-weight-bold">guide</label>
                            <div class="col-md-6">
                                <input type="text" class="form-control" name="guideid" value={this.state.guideid} onChange={this.handleChange} />
                                <div style={{color : "red"}}>{this.state.guideidError}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label text-md-right font-weight-bold">outdoor</label>
                            <div class="col-md-6">                                
                                <input type="text" class="form-control" name="outdoorid" value={this.state.outdoorid} onChange={this.handleChange} />
                                <div style={{color : "red"}}>{this.state.outdooridError}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label text-md-right font-weight-bold">ayurvedic</label>
                            <div class="col-md-6">                                
                                <input type="text" class="form-control" name="ayurvedicid" value={this.state.ayurvedicid} onChange={this.handleChange} />
                                <div style={{color : "red"}}>{this.state.ayurvedicidError}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label text-md-right font-weight-bold">paymentstates</label>
                            <div class="col-md-2 pp">                                
                                <input type="text" class="form-control" name="paymentstates" value={this.state.paymentstates} onChange={this.handleChange} />
                                <div style={{color : "red"}}>{this.state.paymentstatesError}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label text-md-right font-weight-bold">total</label>
                            <div class="col-md-2 pp" >                                
                                <input type="text" class="form-control"  name="total" value={this.state.total} onChange={this.handleChange} />
                                <div style={{color : "red"}}>{this.state.totalError}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label text-md-right font-weight-bold">Approved</label>
                            <div class="col-md-2 ">                                
                                <input type="checkbox" class=" "  name="approve" value={this.state.approve} onChange={this.handleChange} />
                                <div style={{color : "red"}}>{this.state.approveError}</div>
                            </div>
                        </div>
                        
                        <br/>   
                        <div class="col-md-4 offset-md-6">
                            <input type="submit" class="btn btn-success" value={this.state.confirmButton} />&nbsp;
                            <input type="button" class="btn btn-danger" value="Clear" onClick={() => this.onClear()} />
                        </div>
                    </form>
</div>

                  <br></br>
                    <hr/>
                    <br></br><br></br> <br></br><br></br> 

                    <table class="table table-striped table-dark">
                        <thead>
                            <tr>
                            <th class="tableTh">user ID</th>
                                <th class="tableTh">Hotel</th>
                                <th class="tableTh">vehicle</th>
                                <th class="tableTh">guide</th>
                                <th class="tableTh">outdoor</th>
                                <th class="tableTh">ayurvedic</th>
                                <th class="tableTh">payment states</th>
                                <th class="tableTh">total</th>
                                <th class="tableTh">approve</th>
                                <th class="tableTh">Booking</th>
                                <th class="tableTh">Remove</th>
                               
                            </tr>
                        </thead>
                        <tbody>
                        {

client.map((response) =>

                            <tr>
                                 <td class="tableTh">{ response.userid }</td>
                                <td class="tableTh">{ response.Hotelid }</td>
                                <td class="tableTh">{ response.vehicleid }</td>
                                <td class="tableTh">{ response.guideid }</td>
                                <td class="tableTh">{ response.outdoorid }</td>
                                <td class="tableTh">{ response.ayurvedicid }</td>
                                <td class="tableTh">{ response.paymentstates }</td>
                                <td class="tableTh">{ response.total }</td>
                                <td class="tableTh">{ response.approve }</td>
                                <td class="tableTh"><button  type='button' onClick={() => this.onChange(response._id)} class="btn btn-warning">edit and conf.</button></td>
                                <td class="tableTh"><button  type='button' onClick={() => this.onDelete(response._id)} class="btn btn-danger">Delete</button></td>
                                
                            </tr>
                        )
                        }
                        </tbody>
                    </table>
                    
    </div>
    </div>
    
        );
    }
}
export default HotelRoomBookingpaymentList;

