const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var clientSchema = new Schema({
    userid:{type:String},
    Hotelid: {type:String},
    vehicleid: {type: String},
    guideid: {type: String},
    outdoorid: {type: String},
    ayurvedicid: {type:String },    
    paymentstates:{type:String},
    total:{type:Number},
    approve:{type:String }   
})


const client= mongoose.model("Payment",clientSchema);


module.exports = client;


