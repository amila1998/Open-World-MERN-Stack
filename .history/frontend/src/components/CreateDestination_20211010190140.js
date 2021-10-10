import React, { Component } from 'react';
import axios from 'axios';
import "../dest.css"


export default class CreateDestination extends Component {

    constructor(props){
        super(props);

        this.state={
            title:"",
            description:"",
            description1:"",
            url:"",
            url1:"",            
            image1:"", 

            titleError:'',
            descriptionError:'',
            description1Error:'',
            urlError:'',
            url1Error:'',
            image1Error:''  
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

        if(this.state.title && this.state.description && this.state.description1  && this.state.url  && this.state.url1 && this.state.image1 ){

        const{title,description,description1,url,url1,image1} = this.state;

        const data ={
            title:title,
            description:description,
            description1:description1,
            url:url,
            url1:url1,            
            image1:image1
        }
       
        
        console.log(data);
        
        

        axios.post("http://localhost:8070/destination/save",data).then((res)=>{
            if(res.data.success){
                alert("Destination created successfully")
                this.setState({
                    title:"",
                    description:"",
                    description1:"",
                    url:"",
                    url1:"",
                    image1:""
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
            axios.post("http://localhost:8070/destination/upload", data, { 
            }).then(res => { 
                this.setState({image1:res.data.filename})
            })
        })
    }
   

   

    validation = () => {
        let titleError="";
        let descriptionError= "";
        let description1Error= "";
        let urlError= "";
        let url1Error= "";
        let image1Error= "";
        
        if(!this.state.title){
            titleError="Destination Title Required!"
        }

        if(!this.state.description){
            descriptionError="Description Required!"
        }        

        if(!this.state.description1){
            description1Error="Description Required!"
        }

        if(!this.state.url){
            urlError="URL Required!"
        }

        if(!this.state.url.includes('https://')){
            urlError="Invalid URL!"
        }

        if(!this.state.url1){
            url1Error="URL Required!"

        }

        if(!this.state.url1.includes('https://')){
            urlError="Invalid URL!"
        }

        if(!this.state.image1){
            image1Error="Image Required!"
        }
        

        if(titleError | descriptionError | description1Error | urlError | url1Error | image1Error  ){

            this.setState({ titleError , descriptionError , description1Error , urlError , url1Error , image1Error  });

            return false;
        }else{
            this.setState({ titleError , descriptionError , description1Error , urlError , url1Error , image1Error });

        }
        return true;

    }
    


    render() {
        return (
            <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal">Create New Destination</h1>

                    <form className="form-group" >
                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px'}}>Title</label>
                            <input type="text"
                            className="form-control"
                            name="title"
                            placeholder="Enter title"
                            value={this.state.title}
                            onChange={this.handleInputChange} />
                            <div style={{color : "red"}}>{this.state.titleError}</div>
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px'}}>Description</label>
                            <input type="text"
                            className="form-control"
                            name="description"
                            placeholder="Enter Description"
                            value={this.state.description}
                            onChange={this.handleInputChange} />
                            <div style={{color : "red"}}>{this.state.descriptionError}</div>
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px'}}>Description1</label>
                            <input type="text"
                            className="form-control"
                            name="description1"
                            placeholder="Enter Description1"
                            value={this.state.description1}
                            onChange={this.handleInputChange} />
                            <div style={{color : "red"}}>{this.state.description1Error}</div>
                        </div>

                        {/*<div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px'}}>Destination URL</label>
                            <input type="text"
                            className="form-control"
                            name="url"
                            placeholder="Enter URL"
                            value={this.state.url}
                            onChange={this.handleInputChange} />
                            <div style={{color : "red"}}>{this.state.urlError}</div>
                        </div>*/}

                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px'}}>Video URL</label>
                            <input type="text"
                            className="form-control"
                            name="url1"
                            placeholder="Enter Video URL"
                            value={this.state.url1}
                            onChange={this.handleInputChange} />
                            <div style={{color : "red"}}>{this.state.url1Error}</div>
                        </div>
                        
                        <div className="form-group" style={{marginBottom:'15px'}}>
                                <label style={{marginBottom:'5px'}}>Image</label>
                                <input type="file"
                                className="form-control"
                                name="image1"
                                onChange={this.onChangeImage1} />
                                <div style={{color : "red"}}>{this.state.image1Error}</div>
                        </div>

                                               

                        <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                            <i className="fa fa-upload"></i>
                            &nbsp; Upload Destination Details
                        </button>

                    </form>
            </div>
        )
    }
}
