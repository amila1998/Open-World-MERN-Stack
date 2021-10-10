const express = require('express')
var router = express.Router()
var ObjectID= require('mongoose').Types.ObjectId

var { Booking } = require('../model/Booking')

router.get('/',(req,res)=>{
    Booking.find((err,docs)=>{
        if(!err){
            res.send(docs)
        }else{
            console.log(JSON.stringify(err,undefined,2))
        }
    })
})
router.get('/:id',(req,res)=>{
    if(!ObjectID.isValid(req.params.id)){
        return res.status(400).send(req.params.id)
    }

    Booking.findById(req.params.id,(err,docs)=>{
        if(!err){
            res.send(docs)
        }else{
            console.log(JSON.stringify(err,undefined,2))
        }
    })
})

router.post('/',(req,res)=>{
    var newRecord= new Booking({
        adventureid: req.body.adventureid,
        customer_name: req.body.customer_name,
        contactnumber: req.body.contactnumber,
        email: req.body.email,
        numberofvisitors: req.body.numberofvisitors,
        Booking_Date: req.body.Booking_Date,         
    })

    newRecord.save((err,docs)=>{
        if(!err){
            res.send(docs)
        }else{
            console.log(JSON.stringify(err,undefined,2))
        }
    })
})

router.put('/:id',(req,res)=>{
    if(!ObjectID.isValid(req.params.id)){
        return res.status(400).send(req.params.id)
    }

    var updateRecords={
        adventureid: req.body.adventureid,
        
        customer_name: req.body.customer_name,
        contactnumber: req.body.contactnumber,
        email: req.body.email,
        numberofvisitors: req.body.numberofvisitors,
        Booking_Date: req.body.Booking_Date,  
    }

    Booking.findByIdAndUpdate(req.params.id, { $set: updateRecords},{new:true}, (err,docs)=>{
        if(!err){
            res.send(docs)
        }else{
            console.log(JSON.stringify(err,undefined,2))
        }
    })
})

router.delete('/:id',(req,res)=>{
    if(!ObjectID.isValid(req.params.id)){
        return res.status(400).send(req.params.id)
    }

    Booking.findByIdAndRemove(req.params.id,(err,docs)=>{
        if(!err){
            res.send(docs)
        }else{
            console.log(JSON.stringify(err,undefined,2))
        }
    })
})

module.exports = router