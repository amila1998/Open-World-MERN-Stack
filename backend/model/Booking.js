const mongoose = require('mongoose')

var Booking = mongoose.model('Booking',{
    adventureid: {type:String},
    customer_name: {type:String},
    contactnumber: {type:String},
    email: {type:String},
    numberofvisitors: {type:String},
    Booking_Date: {type:String},
})

module.exports = { Booking }