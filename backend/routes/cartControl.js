const express = require('express')
var routes = express.Router()

var ObjectID= require('mongoose').Types.ObjectId
var cart = require("../model/cart");
var User = require("../model/userModel");



//add


routes.route("/:userid").post((req,res)=>{
    let userID = req.params.userid;
    console.log(userID);
    try {
        const user = User.findById(userID);
        if(user){
            const type = req.body.type;
        const NameOnCard = req.body.NameOnCard;
        const Bname = req.body.Bname;
        const cardNumber = Number(req.body.cardNumber) ;
        const CVV = Number(req.body.CVV);
        const Edate = req.body.Edate;
        const approve = req.body.approve;
        const userId = userID;
     const newcart= new cart({
        type,
        NameOnCard,
        Bname,
        cardNumber,
        CVV,
        Edate,
        approve,
        userId
     })  


      newcart.save().then(()=>{

        res.json("register success")
      }).catch((err)=>{
          console.log(err);
      })
        }
    } catch (error) {
        console.log(error)
    }
        
})



//get


routes.route("/").get((req,res)=>{
    cart.find().then((cart)=>{
        res.json(cart)
    }).catch((err)=>{
        console.log(err)
    })
})




//update




routes.route("/:id").put(async (req,res)=>{
    var id = req.params.id;
    const {type,NameOnCard,Bname , cardNumber ,CVV, Edate,approve} = req.body;

    const updatecart ={
        type,
        NameOnCard,
        Bname, 
        cardNumber,
        CVV, 
        Edate,
        approve
    }

    await cart.findByIdAndUpdate(id,updatecart)
    .then(()=>{
        res.status(200).send({status: "user update"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data",error : err.message});
    })
   
})



//delete



routes.route("/:id").delete(async (req, res) => {
var id= req.params.id;

 await cart.findByIdAndDelete(id)
.then(() => {
res.status(200).send({status:"User deleted"});
}).catch((err)=>{
    console.log(err.message);
    res.status(500).send({status:"Error with delete user",error:err.message});
})

})


routes.get('/:id',(req,res)=>{
    if(!ObjectID.isValid(req.params.id)){
        return res.status(400).send(req.params.id)
    }

    cart.findById(req.params.id,(err,docs)=>{
        if(!err){
            res.send(docs)
        }else{
            console.log(JSON.stringify(err,undefined,2))
        }
    })
})

/*
//get 1 user data
routes.route("/:id").get(async (req, res) => {
    var id = req.params.id;
      await cart.findByIdAndUpdate(id)
      .then((cart ) => {
        res.status(200).send({status:"User fetched",cart })
      }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get cart", error: err.message});
    })
  }) 
**/


module.exports = routes;

