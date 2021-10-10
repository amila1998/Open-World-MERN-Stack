import React from 'react';


export default function Settings(props) {
    const userprofileUpdatehandler = () => {
       props.history.push("/UpdateUserProfile")
      };
      const mypaymentnav = () => {
        props.history.push("/mypaymentDetails")
       };
    return(
        <div className="pageBody" style={{maxWidth:"40rem", marging:"auto", align:"center"}}>
            <div className="row">
           <button className="primary" style={{ marginBottom:"1rem"}} onClick={() => userprofileUpdatehandler()}>Update User Profile</button>
            </div>
            <div className="row">
            <button className="primary" style={{ marginBottom:"1rem"}} onClick={() => mypaymentnav()}>My Payments</button>
            </div>
            <div className="row">
            <button style={{ marginBottom:"1rem"}} className="danger">Delete Account</button>
            </div>
            </div>
      
    )
       
    
}
