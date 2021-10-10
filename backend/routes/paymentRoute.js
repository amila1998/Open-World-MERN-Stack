const express = require('express')
var routes = express.Router()
var ObjectID= require('mongoose').Types.ObjectId
var client = require("../model/paymentmodel");



//add


routes.route("/").post((req,res)=>{
    const userid = req.body.userid;
    const Hotelid = req.body.Hotelid;
    const vehicleid = req.body.vehicleid;
    const guideid = req.body.guideid;
    const outdoorid = req.body.outdoorid;
    const ayurvedicid = req.body.ayurvedicid;
    const paymentstates = req.body.paymentstates;
    const total = Number(req.body.total);
    const approve = req.body.approve;
    
 const newclient= new client({
    userid,
    Hotelid,
    vehicleid,
    guideid,
    outdoorid,
    ayurvedicid,
    paymentstates,
    total,
    approve
 })  


  newclient.save().then(()=>{

    res.json("register success")
  }).catch((err)=>{
      console.log(err);
  })
})



//get


routes.route("/").get((req,res)=>{
    client.find().then((client)=>{
        res.json(client)
    }).catch((err)=>{
        console.log(err)
    })
})



//update




routes.route("/:id").put(async (req,res)=>{
    var id = req.params.id;
    const {userid, Hotelid,vehicleid, guideid, outdoorid, ayurvedicid, paymentstates, total, approve} = req.body;

    const updateclient ={
        userid,
        Hotelid,
        vehicleid,
        guideid,
        outdoorid,
        ayurvedicid,
        paymentstates,
        total,
        approve
    }

    await client.findByIdAndUpdate(id,updateclient)
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
    
     await client.findByIdAndDelete(id)
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

    client.findById(req.params.id,(err,docs)=>{
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