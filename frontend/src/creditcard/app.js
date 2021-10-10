import React from 'react';
import Visa from './assets/icons8-visa.svg';
import Mastercard from './assets/icons8-mastercard.svg';
import Discover from './assets/icons8-discover.svg';
import Amex from './assets/icons8-amex.svg';
import {prefixes} from './prefixes.js';
import './creditcard.css';
import swal from  'sweetalert';
import axios from 'axios';

//import 'bootstrap/dist/css/bootstrap.min.css';

const Logo = ({ type, alt, active }) => {
  let imgClass = 'cc-logo';

  if (active) {
    imgClass = 'cc-logo active';
  }

  return (
    <>
      <img src={type} alt={`${alt} credit card logo`} className={imgClass} />
    </>
  );
}

const initialState = {
    id: "",
     
    NameOnCard: "",
    Bname: "",
    CVV: "",
    Edate: "",
    approve:"",
    
    NameOnCardError: "",
    BnameError: "",
    cardNumberError: "",
    CVVError: "",
    EdateError: "",
    approveError:"",
    confirmButton: "Check out",
    selectedFile: "",
    cart: [],
    maxLength: 16,
    cardNumber: "",
    placeholder: 'Enter credit card number',
    activeVisa: false, 
    activeMastercard: false,
    activeDiscover: false,
    activeAmex: false,
    type: '',
    valid: '',
    error: {},
    userData:"",
}

class CreditCardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;   
    
  }


  componentDidMount() {
    const url =  "http://localhost:8070/cardR";     
    axios.get(url)
    .then(response => this.setState({cart:response['data']})
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


  getValidMessage = () => {
    if (this.state.valid !== '') {
      return this.state.valid
        ? 'Valid ✓'
        : 'Credit card number is invalid';
    }

    return '';
  }

  validation = () => {
     
    let NameOnCardError="";
    let BnameError= "";
    let cardNumberError= "";
    let CVVError= "";
    let EdateError= "";
    let approveError= "";
    
   
   
    if(!this.state.NameOnCard){
        NameOnCardError="Name On Card Required!"
    }
    if(!this.state.Bname){
        BnameError="Bname Required!"
    }
    if(!this.state.cardNumber){
      cardNumberError=" Card Number Required!"
    }
    if(!this.state.CVV){
        CVVError="CVV Required!"
    }
    if(!this.state.Edate ){
        EdateError="Expire date Required!"
    }
    if(!this.state.approve ){
        approveError="approve Required!"
    }

    if(  NameOnCardError |  BnameError | cardNumberError |CVVError | EdateError |approveError ){
        
         this.setState({  NameOnCardError ,   BnameError ,cardNumberError ,CVVError ,EdateError,approveError });
        
        return false;

    }else{

         this.setState({  NameOnCardError ,  BnameError ,cardNumberError , CVVError ,EdateError,approveError});
    
    }

    return true;
}

  onChange(id){
    const url = "http://localhost:8070/cardR/";
    axios.get(url+id)
    .then(response =>
    this.setState({NameOnCard:response['data']['NameOnCard'] , Bname:response['data']['Bname'] ,cardNumber:response['data']['cardNumber'] ,CVV:response['data']['CVV'] ,Edate:response['data']['Edate'] ,id:id}))
    this.setState({confirmButton:"EDIT"});
}

onClear(){
    this.setState(initialState);
    this.componentDidMount();
}

SubmitForm = async(e) => {
    e.preventDefault();
     this.validation();
     this.userData =JSON.parse(localStorage.getItem('userInfo'));
     const UID = this.userData._id;
    if( this.state.NameOnCard && this.state.Bname && this.state.cardNumber  && this.state.CVV && this.state.Edate  ){
        console.log(this.state);
        const url = "http://localhost:8070/cardR/";
        
        if(!this.state.id){
            var data = JSON.stringify({ NameOnCard: this.state.NameOnCard ,  Bname: this.state.Bname ,  cardNumber: this.state.cardNumber ,  CVV: this.state.CVV ,  Edate: this.state.Edate});
            console.log(data);
            await axios.post(url+`/${UID}`,data,{
                headers: {'Content-Type': 'application/json'}
            })
            .then(res => {
                console.log(res.data);
                this.setState(initialState)
                this.componentDidMount()
                swal("Your Booking is confirmed!", "We will contact you soon!", "success")
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
            const url = "http://localhost:8070/cardR/";
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

 


  verifyNumber = () => {
    let sum = 0;
    let temp = 0;
    let cardNumberCopy = this.state.cardNumber;
    let checkDigit = parseInt(this.state.cardNumber.slice(-1));
    let parity = cardNumberCopy.length % 2;

    for (let i = 0; i <= cardNumberCopy.length - 2; i++) {
      if (i % 2 === parity) {
        temp = (+cardNumberCopy[i]) * 2;
      }
      else {
        temp = (+cardNumberCopy[i]);
      }

      if (temp > 9) {
        temp -= 9;
      }

      sum += temp;
    }

    return (sum + checkDigit) % 10 === 0;
  }

  /* 
    Not sure of a better way to allow arguments
    that are switched up depending on the call
    and only present 3/4 options at any given
    time
  */
  purgeInactive = (firstCard, secondCard, thirdCard, fourthCard) => {
    this.setState({
      ['active' + firstCard]: false,
      ['active' + secondCard]: false,
      ['active' + thirdCard]: false,
      ['active' + fourthCard]: true,
      valid: '',
    });
  }

  determineType = (cardNumber) => {

    for (let key of prefixes) {
      for (let value of key[1]) {
        if (cardNumber.startsWith(value)) {
          this.setState({
            type: key[0],
          });

          /* TODO: Find a better way to manage this. */
          switch (key[0]) {
            case 'Visa':
              this.purgeInactive('Mastercard', 'Discover', 'Amex', 'Visa');
              break;
            case 'Mastercard':
              this.purgeInactive('Visa', 'Discover', 'Amex', 'Mastercard');
              break;
            case 'Discover':
              this.purgeInactive('Visa', 'Mastercard', 'Amex', 'Discover');
              break;
            case 'Amex':
              this.purgeInactive('Visa', 'Mastercard', 'Discover', 'Amex');
              break;
            default:
              break;
          }

          return;
        }
        else {
          this.setState({
            ['active' + key[0]]: false,
            type: '',
            valid: '',
          });
        }
      }
    }
  }
  handleClick = (e) => {
    this.setState({
      cardNumber: '',
      valid: '',
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.cardNumber !== this.state.cardNumber) {
      this.determineType(this.state.cardNumber);
    }

    if (prevState.activeAmex !== this.state.activeAmex) {
      this.state.activeAmex
        ? this.setState({ maxLength: 15 })
        : this.setState({ maxLength: 16 });
    }

    if (prevState.type !== this.state.type) {
      if (this.state.type !== '') {
        this.setState({
          ['active' + this.state.type]: true,
        });
      }
    }

    /* A chain like this just seems wrong. */
    if (prevState.cardNumber.length !== this.state.cardNumber.length
        && this.state.cardNumber.length === this.state.maxLength) {
          this.setState({
            valid: this.verifyNumber(),
          });
    }
  }

 

 

  render() {
   

    return (
        <div className="container">
        
        <div className="justify-content-center">
        
                
                 
                <h2>Card Details</h2>
                <hr/>

                

                <div className="x_scroll"></div>
                <br></br> 

                <form autoComplete="off" onSubmit={this.SubmitForm}>

                <div className="form-group row">
                            <label className="col-md-4 col-form-label text-md-right font-weight-bold">Name On Card</label>
                            <div className="col-md-6">
                                <input type="(text)"  placeholder="Sandun Perera" className="form-control" name="NameOnCard" value={this.state.NameOnCard} onChange={this.handleChange} />
                                <div style={{color : "red"}}>{this.state.NameOnCardError}</div>
                            </div>
                        </div>
                        <br/>
                        <div className="form-group row">
                            <label className="col-md-4 col-form-label text-md-right font-weight-bold">Bank Name</label>
                            <div className="col-md-6">
                                <input type="text"  placeholder="sampath Bank " className="form-control" name="Bname" value={this.state.Bname} onChange={this.handleChange} />
                                <div style={{color : "red"}}>{this.state.BnameError}</div>
                            </div>
                        </div>
                        <br/>


      
        <div className="form-group row"> <label className="col-md-4 col-form-label text-md-right font-weight-bold">Card Number</label> <div className="col-md-6">
        <input type="number" className="form-control" name="cardNumber" value={this.state.cardNumber} onChange={this.handleChange} placeholder={this.state.placeholder} maxLength={this.state.maxLength}  /> 
        <div className="error">  <div className=   { this.state.valid? 'error valid' : 'error invalid' }>  { this.getValidMessage() } </div>  </div><div style={{color : "red"}}>{this.state.cardNumberError}</div>
        <div>
        <Logo type={Visa} alt="Visa"  active={this.state.activeVisa} />
          <Logo type={Mastercard}  alt= "Mastercard"  active={this.state.activeMastercard} />
          <Logo type={Discover} alt="Discover"  active={this.state.activeDiscover} />
          <Logo type={Amex} alt="American Express" active={this.state.activeAmex} />
        </div> </div>  </div>
     

     
                        <br/>
                        <div className="form-group row">
                            <label className="col-md-4 col-form-label text-md-right font-weight-bold">CVV</label>
                            <div className="col-md-6">
                                <input type="password"  placeholder="**** " className="form-control" name="CVV" value={this.state.CVV} onChange={this.handleChange} />
                                <div style={{color : "red"}}>{this.state.CVVError}</div>
                            </div>
                        </div>
                        <br/>
                        <div className="form-group row">
                            <label className="col-md-4 col-form-label text-md-right font-weight-bold">Ex. date</label>
                            <div className="col-md-6">                                
                                <input type="date"  className="form-control" name="Edate" value={this.state.Edate} onChange={this.handleChange} />
                                <div style={{color : "red"}}>{this.state.EdateError}</div>
                            </div>
                        </div>
                        <br/>
                       
                        
                        <br/>   
                        <div className="col-md-4 offset-md-6">
                            <input type="submit" className="btn btn-success" value={this.state.confirmButton} />&nbsp;
                            <input type="button" className="btn btn-danger" value="Clear" onClick={() => this.onClear()} />
                        </div>
                    </form>
                    </div>
            </div>

    );
  }
}








function app() {
  return (
    <>
     
      <div className="cc-form">
        <CreditCardForm />
      </div>
      
    </>
  );
}

export default app;