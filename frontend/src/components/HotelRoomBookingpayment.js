import React from 'react';
import '../creditcard/creditcard.css';
import swal from  'sweetalert';
import axios from 'axios';

//import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';


const initialState = {
    id: "", HotelBookingDetails:{}, message:"", hotelOwner:"", paymenttype:"", paidAt:"", roomid:"", paidprice:"", startdate:"",enddate:"",
    HotelBookingDetailsError:{}, messageError:"",hotelOwnerEror:"", paymenttypeError:"",paidAtError:"", roomidError:"", paidpriceError:"",startdateError:"",enddateError:"",
    userid:"",    Hotelid: "",    vehicleid: "",    guideid: "",    outdoorid: "",    ayurvedicid: "",    paymentstates: "",    total: "", approve: "",
    useridError:"", HotelidError: "",    vehicleidError: "",    guideidError: "",    outdooridError: "",    ayurvedicidError: "",    paymentstatesError: "",    totalError: "",approveError: "",
    confirmButton: "Send",    selectedFile: "",    client: [],
}


class HotelRoomBookingpayment extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialState; 
    }
    componentDidMount() {
        this.HotelBookingDetailsretrieve();
        const url = "http://localhost:8070/paymentR";       
        axios.get(url)
        .then(response => this.setState({client:response['data']})
        )
    }
HotelBookingDetailsretrieve(){
    let HBid = this.props.match.params.hbid;
   // console.log (HBid);
    axios.get( `http://localhost:8070/hotelbookingR/get/${HBid}`).then((res)=>{
        if(res.data.success){
            console.log (res.data.bookingDetails._id);

           this.setState({userid:res.data.bookingDetails.userID,
            Hotelid:res.data.bookingDetails.hotel,
            message:res.data.bookingDetails.message,
            hotelOwner:res.data.bookingDetails.hotelOwner, 
            paymenttype:res.data.bookingDetails.paymenttype,
             paidAt:res.data.bookingDetails.paidAt,
              roomid:res.data.bookingDetails.room,
            paidprice:res.data.bookingDetails.paidprice, 
             startdate:res.data.bookingDetails.startDate, 
               enddate:res.data.bookingDetails.endDate,
               total:res.data.bookingDetails.price });
           
        }
    });
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
        const url = 'http://localhost:8070/paymentR';
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



        let HotelBookingDetailsError= "";
        let messageError= "";
        let hotelOwnerEror= "";
        let paymenttypeError= "";
        let paidAtError= "";
        let roomidError= "";
        let paidpriceError= "";
        let startdateError= "";
        let enddateError= "";


       
      
        if(!this.state.userid){  useridError="User Name is Required!"  }
        if(!this.state.Hotelid){ HotelidError=" cart is empty" }
        if(!this.state.vehicleid){  vehicleidError=" cart is empty" }
        if(!this.state.guideid){ guideidError=" cart is empty" }
        if(!this.state.outdoorid ){  outdooridError=" cart is empty"  }
        if(!this.state.ayurvedicid ){  ayurvedicidError=" cart is empty"}       
        if(!this.state.total ){totalError="-" }
        if(!this.state.approve ){ approveError=" cart is empty" }

        if(!this.state.HotelBookingDetails ){ HotelBookingDetailsError=" cart is empty" }
        if(!this.state.message ){ messageError=" cart is empty" }
        if(!this.state.hotelOwner ){ hotelOwnerEror=" cart is empty" }
        if(!this.state.paymenttype ){ paymenttypeError=" cart is empty" }
        if(!this.state.paidAt ){ paidAtError=" cart is empty" }
        if(!this.state.roomid ){ roomidError=" cart is empty" }
        if(!this.state.paidprice ){ paidpriceError=" cart is empty" }
        if(!this.state.startdate ){ startdateError=" cart is empty" }
        if(!this.state.enddate ){ enddateError=" cart is empty" }
        







        if( useridError |  HotelidError |vehicleidError |guideidError | outdooridError |ayurvedicidError|totalError |approveError |HotelBookingDetailsError |messageError |hotelOwnerEror |paymenttypeError 
            |paidAtError|roomidError |paidpriceError |startdateError |enddateError  ){
            
             this.setState({  useridError ,  HotelidError ,vehicleidError ,guideidError , outdooridError,ayurvedicidError,totalError ,approveError , HotelBookingDetailsError ,messageError ,hotelOwnerEror ,paymenttypeError 
                ,paidAtError,roomidError ,paidpriceError ,startdateError,enddateError});
            
            return false;

        }else{

             this.setState({useridError ,  HotelidError ,vehicleidError ,guideidError , outdooridError,ayurvedicidError,totalError ,approveError , HotelBookingDetailsError ,messageError ,hotelOwnerEror ,paymenttypeError 
                ,paidAtError,roomidError ,paidpriceError ,startdateError,enddateError});
        
        }

        return true;
    }


    SubmitForm = async(e) => {
        e.preventDefault();
        this.validation();
        if( this.state.userid && this.state.Hotelid &&      this.state.total  ){
            console.log(this.state);
            const url = 'http://localhost:8070/paymentR';
            
            if(!this.state.id){
                var data = JSON.stringify({  userid: this.state.userid ,  Hotelid:this.state.Hotelid ,   total: this.state.total });
                console.log(data);
                await axios.post(url,data,{
                    headers: {'Content-Type': 'application/json'}
                })
                .then(res => {
                    console.log(res.data);
                    this.setState(initialState)
                    this.componentDidMount()
                    swal("success!", "Add Card Details to confirm!", "success")
                })
           
            }else{
                var datas = JSON.stringify({  userid: this.state.userid ,  Hotelid:this.state.Hotelid ,   total: this.state.total ,id:this.state.id});
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
    
    //const {hotel,room ,startDate , endDate, serviceProviderAcception,ispaid,price ,paymenttype,paidAt,paidprice ,message,userID,hotelOwner }=this.State.HotelBookingDetails;
        const {  } = this.state;
        return (
            <div class="container" >
           
            <div class="justify-content-center">
   <br></br>  


   <h2>Cart</h2>
                    <hr/>
                    <div class="x_scroll"></div>
                    <br></br>
                     <div>
                    <form autoComplete="off" onSubmit={this.SubmitForm}>
                        <div hidden class="form-group row">
                            <label class="col-md-4 col-form-label text-md-right font-weight-bold">userid</label>
                            <div class="col-md-6">
                                <input disable="true" type="(text)" class="form-control" name="userid" value={this.state.userid} onChange={this.handleChange} />
                                <div style={{color : "red"}}>{this.state.useridError}</div>
                            </div>
                        </div>
                        <br/>
                        <div  class="form-group row">
                            <label class="col-md-4 col-form-label text-md-right font-weight-bold">Hotel</label>
                            <div class="col-md-6">
                                <input disable="true" type="text" class="form-control" name="Hotelid" value={this.state.Hotelid} onChange={this.handleChange} />
                                <div style={{color : "red"}}>{this.state.HotelidError}</div>
                            </div>
                        </div>
                        <br/>


                        
                        <br/>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label text-md-right font-weight-bold">total</label>
                            <div class="col-md-6">                                
                                <input disable="true" type="number" class="form-control" name="total" value={this.state.total} onChange={this.handleChange} />
                                <div style={{color : "red"}}>{this.state.totalError}</div>
                            </div>
                        </div>
                        <br/>
                       
                        
                        <br/>   
                        <div class=" offset-md-6">
                            <input type="submit" class="btn btn-success" value={this.state.confirmButton} />&nbsp;
                            <NavLink className={'btn btn-danger'} to={'/addanewcard'}>   card details</NavLink>
                        </div>
                    </form>
                    </div>
                  <br></br>
                    <hr/>
                    <br></br><br></br> <br></br><br></br> 
                    </div>
    </div>
    
        );
    }
}
export default HotelRoomBookingpayment;