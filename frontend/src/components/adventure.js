import React from 'react';
import '../App.css';
import swal from 'sweetalert';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const initialState = {
    id: "",
    adventure_name: "",
    image1: "",
    image2: "",
    city: "",
    province: "",
    description: "",
    adventure_type: "",
    adventure_nameError: "",
    image1Error: "",
    image2Error: "",
    cityError: "",
    provinceError: "",
    descriptionError: "",
    adventure_typeError: "",
    confirmButton: "Send",
    selectedFile: "",
    adventure: [],
}

class Adventure extends React.Component {

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

    onChange(id){
        const url = "http://localhost:8070/adventure/"+id;
        axios.get(url).then(response => this.setState({adventure_name:response['data']['adventure_name'], city:response['data']['city']  ,image1:response['data']['image1'],image2:response['data']['image2'],province:response['data']['province'],description:response['data']['description'],adventure_type:response['data']['adventure_type'],id:id}))
        this.setState({confirmButton:"EDIT"});
    }

    onClear(){
        this.setState(initialState);
        this.componentDidMount();
    }
  
    validation = () => {
        let adventure_nameError="";
        let image1Error= "";
        let image2Error= "";
        let cityError= "";
        let provinceError= "";
        let descriptionError= "";
        let adventure_typeError= "";
       
        if(!this.state.adventure_name){
            adventure_nameError="Adventure Name Required!"
        }
        if(!this.state.image1){
            image1Error="Image Required!"
        }
        if(!this.state.image2){
            image2Error="Image Required!"
        }
        if(!this.state.city){
            cityError="city Required!"
        }
        if(!this.state.province){
            provinceError="province Required!"
        }
        if(!this.state.description){
            descriptionError="Description Required!"
        }
        if(!this.state.adventure_type ){
            adventure_typeError="Adventure Type Required!"
        }

        if(adventure_nameError | image1Error | image2Error | cityError | provinceError | descriptionError | adventure_typeError ){
            
            this.setState({ adventure_nameError , cityError , image1Error , image2Error , provinceError , descriptionError , adventure_typeError });
            
            return false;

        }else{

            this.setState({ adventure_nameError , cityError , image1Error , image2Error , provinceError , descriptionError , adventure_typeError});
        
        }

        return true;
    }

    
    onChangeHandler=event=>{
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
        }, () => {
            const data = new FormData() 
            data.append('file', this.state.selectedFile)
            axios.post("http://localhost:8070/adventure/upload", data, { 
            }).then(res => { 
                this.setState({image1:res.data.filename})
            })
        })
    }

    onChangeHandler1=event=>{
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
        }, () => {
            const data = new FormData() 
            data.append('file', this.state.selectedFile)
            axios.post("http://localhost:8070/adventure/upload", data, { 
            }).then(res => { 
                this.setState({image2:res.data.filename})
            })
        })
    }
    
    SubmitForm = async(e) => {
        e.preventDefault();
        this.validation();
        if(this.state.adventure_name && this.state.image1 && this.state.image2  && this.state.city  && this.state.province && this.state.description  && this.state.adventure_type){
            console.log(this.state);
            const url = 'http://localhost:8070/adventure';
            if(!this.state.id){
                var data = JSON.stringify({ adventure_name: this.state.adventure_name , image1: this.state.image1 , image2: this.state.image2 ,province: this.state.province , city: this.state.city ,  description: this.state.description ,  adventure_type: this.state.adventure_type   });
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
                var datas = JSON.stringify({ adventure_name: this.state.adventure_name , image1: this.state.image1 , image2: this.state.image2 ,province: this.state.province , city: this.state.city ,  description: this.state.description ,  adventure_type: this.state.adventure_type  });
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
                const url = 'http://localhost:8070/adventure/';
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
        const { adventure } = this.state;
        return (
            <div className="bgimg">
            <div class="container">
            <br/><br/>
            <div class="justify-content-center">
                    <h2>Adventure Activities</h2>
                    <hr/>
                    <div class="x_scroll">
                    <table class="table">
                        <thead>
                            <tr>
                                <th class="tableTh">Adventure Name</th>
                                <th class="tableTh">City</th>
                                <th class="tableTh">Image</th>
                                <th class="tableTh">Image</th>
                                <th class="tableTh">Province</th>
                                <th class="tableTh">Description</th>
                                <th class="tableTh">Activity Type</th>
                                <th class="tableTh">Edit</th>
                                <th class="tableTh">Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                        {

                            adventure.map((res) =>

                            <tr>
                                <td class="tableTh">{ res.adventure_name }</td>
                                <td class="tableTh">{ res.city }</td>
                                <td class="tableTh"><img width="100px" class="img-thumbnail" src={ "http://localhost:8070/" + res.image1 }alt="description" /></td>
                                <td class="tableTh"><img width="100px" class="img-thumbnail" src={ "http://localhost:8070/" + res.image2 }alt="description"/></td>
                                <td class="tableTh">{ res.province }</td>
                                <td class="tableTh">{ res.description }</td>
                                <td class="tableTh">{ res.adventure_type }</td>
                                <td class="tableTh"><button type='button' onClick={() => this.onChange(res._id)} class="btn btn-outline-success">Edit</button></td>
                                <td class="tableTh"><button type='button' onClick={() => this.onDelete(res._id)} class="btn btn-outline-danger">Delete</button></td>
                            </tr>
                        )
                        }
                        </tbody>
                      </table>
                        <form autoComplete="off" onSubmit={this.SubmitForm}>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label text-md-right font-weight-bold">Adventure Name</label>
                            <div class="col-md-6">
                                <input type="text" class="form-control" name="adventure_name" value={this.state.adventure_name} onChange={this.handleChange} />
                                <div style={{color : "red"}}>{this.state.adventure_nameError}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label text-md-right font-weight-bold">City</label>
                            <div class="col-md-6">
                                <input type="text" class="form-control" name="city" value={this.state.city} onChange={this.handleChange} />
                                <div style={{color : "red"}}>{this.state.cityError}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label text-md-right font-weight-bold">Image</label>
                            <div class="col-md-6">
                                <input type="file" class="form-control" name="file"  onChange={this.onChangeHandler} />
                                <div style={{color : "red"}}>{this.state.image1Error}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label text-md-right font-weight-bold">Image</label>
                            <div class="col-md-6">
                                <input type="file" class="form-control" name="file"  onChange={this.onChangeHandler1} />
                                <div style={{color : "red"}}>{this.state.image2Error}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label text-md-right font-weight-bold">Province</label>
                            <div class="col-md-6">
                                <input type="text" class="form-control" name="province" value={this.state.province} onChange={this.handleChange} />
                                <div style={{color : "red"}}>{this.state.provinceError}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label text-md-right font-weight-bold">Description</label>
                            <div class="col-md-6">
                                <input type="text" class="form-control" name="description" value={this.state.description} onChange={this.handleChange} />
                                <div style={{color : "red"}}>{this.state.descriptionError}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label text-md-right font-weight-bold">Adventure Type</label>
                            <div class="col-md-6">
                                <select class="form-control" name="adventure_type" onChange={this.handleChange} value={this.state.adventure_type}>
                                    <option value="">~select~</option>
                                    <option value="Offer packages">Offer packages</option>
                                    <option value="Outdoor Activities">Outdoor Activities</option>
                                    <option value="Street food">Street food</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.adventure_typeError}</div>
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
            </div>
        );
    }
}

export default Adventure;
