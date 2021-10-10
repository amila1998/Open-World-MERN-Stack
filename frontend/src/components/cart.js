import React from 'react';
import '../creditcard/creditcard.css';
import swal from  'sweetalert';
import axios from 'axios';
import Sidebar from '../components/AdminSidebar';
/*import 'bootstrap/dist/css/bootstrap.min.css';*/



const initialState = {
    userData:"",
    id: "",
   
    NameOnCard: "",
    Bname: "",
    cardNumber: "",
    CVV: "",
    Edate: "",
    approve:"",
    
    NameOnCardError: "",
    BnameError: "",
    cardNumberError: "",
    CVVError: "",
    EdateError: "",
    approveError:"",
    confirmButton: "Send",
    selectedFile: "",
    cart: [],
    search:"",
}

class cart extends React.Component {


    constructor(props) {
        super(props);
        this.state = initialState; 
    }
    componentDidMount() {
        const url = "http://localhost:8070/cardR";       
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

   
    

    onChange(id){
        const url = "http://localhost:8070/cardR/";
        axios.get(url+id)
        .then(response =>
        this.setState({  NameOnCard:response['data']['NameOnCard'] , Bname:response['data']['Bname'] ,cardNumber:response['data']['cardNumber'] ,
        CVV:response['data']['CVV'] ,Edate:response['data']['Edate'] ,approve:response['data']['approve'],id:id}))
        this.setState({confirmButton:"EDIT"});
    }

    onClear(){
        this.setState(initialState);
        this.componentDidMount();
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
            cardNumberError="cardNumber Required!"
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

        if( NameOnCardError |  BnameError |cardNumberError |CVVError | EdateError |approveError ){
            
             this.setState({ NameOnCardError ,   BnameError , cardNumberError ,CVVError ,EdateError,approveError });
            
            return false;

        }else{

             this.setState({ NameOnCardError ,  BnameError , cardNumberError , CVVError ,EdateError,approveError});
        
        }

        return true;
    }



    SubmitForm = async(e) => {
        e.preventDefault();
         this.validation();
         this.userData =JSON.parse(localStorage.getItem('userInfo'));
         const UID = this.userData._id;
        if( this.state.NameOnCard && this.state.Bname && this.state.cardNumber  && this.state.CVV && this.state.Edate ||this.state.approve ){
            console.log(this.state);
            const url = "http://localhost:8070/cardR/";
            
            if(!this.state.id){
                var data = JSON.stringify({ NameOnCard: this.state.NameOnCard ,  Bname: this.state.Bname ,  cardNumber: this.state.cardNumber ,  CVV: this.state.CVV ,  Edate: this.state.Edate, approve: this.state.approve});
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
           
            }else{
                var datas = JSON.stringify({ NameOnCard: this.state.NameOnCard ,  Bname: this.state.Bname ,  cardNumber: this.state.cardNumber ,  CVV: this.state.CVV ,  Edate: this.state.Edate , approve: this.state.approve,id:this.state.id});
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

   
   
    
    

    render (){
        const { cart } = this.state;
        return (
            <div>

            <div id="split1">
            <div id="left1">
               
                  <Sidebar/>
            
              </div>
              
                  <div class="right1 pageBody">
            <div class="container">
            <br/><br/>
            <div class="justify-content-center">
           
                    
                    
                     
                    <h2>ADMIN VIEW PAYMENTS</h2>
                    <hr/>

                    <div className="col-lg-3 mt-2 mb-2" style={{marginTop:'40px', marginLeft:'50px', marginRight:'40px'}}>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label text-md-right font-weight-bold">Search</label>
                            <input type="text" class="form-control" name="search" value={this.state.search} onChange={this.handleChange} />
                        </div> </div>



                    <div class="x_scroll"></div>



                    <br></br><br></br> <br></br><br></br> 

<table class="table">
    <thead>
        <tr>
        
            <th class="tableTh">Name On Card</th>
            <th class="tableTh">Bank Name</th>
            <th class="tableTh">Card No</th>
            <th class="tableTh">CVV</th>
            <th class="tableTh">Ex.date</th>
            <th class="tableTh">Approved</th>
            <th class="tableTh">Edit</th>
            <th class="tableTh">Remove</th>
        </tr>
    </thead>
    <tbody>

        
    {

cart.filter((data)=>{

if(this.state.search == null)

return data

else if(data.NameOnCard.toLowerCase().includes(this.state.search.toLowerCase()) || data.Bname.toLowerCase().includes(this.state.search.toLowerCase()) ){

return data

}

}).map((response) =>

        <tr>
            
            <td class="tableTh">{ response.NameOnCard }</td>
            <td class="tableTh">{ response.Bname }</td>
            <td class="tableTh">{ response.cardNumber }</td>
            <td class="tableTh">{ response.CVV }</td>
            <td class="tableTh">{ response.Edate }</td>
            <td class="tableTh">{ response.approve }</td>

            <td class="tableTh"><button  type='button' onClick={() => this.onChange(response._id)} class="btn btn-warning">Edit</button></td>
            <td class="tableTh"><button  type='button' onClick={() => this.onDelete(response._id)} class="btn btn-danger">Delete</button></td>
        </tr>
    )
    }
    </tbody>
</table>

                    <br></br> 

                    <form autoComplete="off" onSubmit={this.SubmitForm}>
                 


                        <div class="form-group row">
                            <label class="col-md-4 col-form-label text-md-right font-weight-bold">Name On Card</label>
                            <div class="col-md-6">
                                <input type="(text)" class="form-control" name="NameOnCard" value={this.state.NameOnCard} onChange={this.handleChange} />
                                <div style={{color : "red"}}>{this.state.NameOnCardError}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label text-md-right font-weight-bold">Bank Name</label>
                            <div class="col-md-6">
                                <input type="text" class="form-control" name="Bname" value={this.state.Bname} onChange={this.handleChange} />
                                <div style={{color : "red"}}>{this.state.BnameError}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label text-md-right font-weight-bold">Card Number</label>
                            <div class="col-md-6">
                                <input type="number" class="form-control" name="cardNumber" value={this.state.cardNumber} onChange={this.handleChange} />
                                <div style={{color : "red"}}>{this.state.cardNumberError}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label text-md-right font-weight-bold">CVV</label>
                            <div class="col-md-6">
                                <input type="password" class="form-control" name="CVV" value={this.state.CVV} onChange={this.handleChange} />
                                <div style={{color : "red"}}>{this.state.CVVError}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label text-md-right font-weight-bold">Ex. date</label>
                            <div class="col-md-6">                                
                                <input type="date" class="form-control" name="Edate" value={this.state.Edate} onChange={this.handleChange} />
                                <div style={{color : "red"}}>{this.state.EdateError}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label text-md-right font-weight-bold">Approved</label>
                            <div class="col-md-2">                                
                                <input type="checkbox" class="" name="approve" value={this.state.approve} onChange={this.handleChange} />
                                <div style={{color : "red"}}>{this.state.approveError}</div>
                            </div>
                        </div>
                        
                        <br/>   
                        <div class="col-md-4 offset-md-6">
                            <input type="submit" class="btn btn-success" value={this.state.confirmButton} />&nbsp;
                            <input type="button" class="btn btn-danger" value="Clear" onClick={() => this.onClear()} />
                        </div>
                    </form>
                    <br></br>
                    <hr/>
                   
                    </div>
                    
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default cart;


