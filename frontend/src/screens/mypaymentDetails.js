import React from 'react';


export default function mypaymentDetails(props) {
    const addNewCardNav = () => {
       props.history.push("/addanewcard")
      };
     
    return(
        <div className="pageBody" style={{maxWidth:"40rem", marging:"auto", align:"center"}}>
            <div className="row">
           <button className="primary" style={{ marginBottom:"1rem"}} onClick={() => addNewCardNav()}>Add a New Card</button>
            </div>
           
            </div>
      
    )
       
    
}
